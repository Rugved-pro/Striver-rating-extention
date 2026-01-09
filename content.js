/******************************************************
 * Fetch all Codeforces problems and build a rating map
 * Key format: "<contestId><index>"  (e.g. "1602C")
 ******************************************************/
async function getProblemRatings() {
  try {
    const response = await fetch("https://codeforces.com/api/problemset.problems");
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("CF API error:", data.comment);
      return {};
    }

    const ratingMap = {};
    const problems = data.result.problems;

    for (const p of problems) {
      if (p.contestId && p.index && p.rating) {
        const key = `${p.contestId}${p.index}`;
        ratingMap[key] = p.rating;
      }
    }

    return ratingMap;
  } catch (err) {
    console.error("Failed to fetch CF ratings:", err);
    return {};
  }
}

/******************************************************
 * Normalize Codeforces URLs (problemset + contest)
 ******************************************************/
function extractCFKey(url) {
  try {
    const u = new URL(url);

    // contest format
    let m = u.pathname.match(/^\/contest\/(\d+)\/problem\/([A-Z]\d*)/i);
    if (m) return `${m[1]}${m[2]}`;

    // problemset format
    m = u.pathname.match(/^\/problemset\/problem\/(\d+)\/([A-Z]\d*)/i);
    if (m) return `${m[1]}${m[2]}`;

    return null;
  } catch {
    return null;
  }
}

/******************************************************
 * Inject ratings next to CF links
 ******************************************************/
function applyRatings(ratingMap) {
  const links = document.querySelectorAll("a[href*='codeforces.com']");

  links.forEach(link => {
    if (link.dataset.cfRated === "true") return;

    const key = extractCFKey(link.href);
    if (!key) return;

    const rating = ratingMap[key];
    if (!rating) return;

    const span = document.createElement("span");
    span.textContent = ` ⭐ ${rating}`;
    span.className = "cf-rating-span";
    span.style.color = "#ffcc00";
    span.style.fontWeight = "600";
    span.style.marginLeft = "6px";
    span.style.whiteSpace = "nowrap";

    link.after(span);
    link.dataset.cfRated = "true";
  });
}

/******************************************************
 * Main runner with React-safe MutationObserver
 ******************************************************/
(async function () {
  console.log("[Striver CF Ratings] Loading ratings…");

  const ratingMap = await getProblemRatings();
  if (Object.keys(ratingMap).length === 0) {
    console.log("[Striver CF Ratings] No ratings loaded.");
    return;
  }

  console.log(`[Striver CF Ratings] Loaded ${Object.keys(ratingMap).length} ratings`);

  // Initial run
  applyRatings(ratingMap);

  // React-safe observer (debounced)
  let debounceTimer = null;

  const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      applyRatings(ratingMap);
    }, 400);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
