// Simple web fetch service for CarGeek using Wikipedia APIs (CORS-friendly)
// No keys required. Returns concise data for display inside the chat.

const WIKI_API = 'https://en.wikipedia.org/w/api.php';
const WIKI_REST_SUMMARY = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

function buildParams(params) {
  const usp = new URLSearchParams({ origin: '*', format: 'json', ...params });
  return usp.toString();
}

export async function fetchCarInfo(query) {
  // Step 1: search for the page title
  const searchUrl = `${WIKI_API}?${buildParams({ action: 'query', list: 'search', srsearch: query, srlimit: 1 })}`;
  const searchRes = await fetch(searchUrl);
  if (!searchRes.ok) throw new Error('Network error searching Wikipedia');
  const searchJson = await searchRes.json();
  const hit = searchJson?.query?.search?.[0];
  if (!hit) return null;

  // Step 2: get the summary by title
  const summaryUrl = `${WIKI_REST_SUMMARY}${encodeURIComponent(hit.title)}`;
  const summaryRes = await fetch(summaryUrl);
  if (!summaryRes.ok) throw new Error('Network error fetching summary');
  const summary = await summaryRes.json();

  return {
    title: summary?.title || hit.title,
    description: summary?.description || '',
    extract: summary?.extract || hit.snippet,
    url: summary?.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(hit.title)}`,
    thumbnail: summary?.thumbnail?.source || null,
    source: 'Wikipedia'
  };
}

export async function fetchModIdeas(query) {
  // Search for common modifications related to query
  const q = `common modifications ${query}`;
  const searchUrl = `${WIKI_API}?${buildParams({ action: 'query', list: 'search', srsearch: q, srlimit: 3 })}`;
  const res = await fetch(searchUrl);
  if (!res.ok) throw new Error('Network error fetching mod ideas');
  const json = await res.json();
  const items = (json?.query?.search || []).map((s) => ({
    title: s.title,
    snippet: s.snippet?.replace(/<span class="searchmatch">|<\/span>/g, ''),
    url: `https://en.wikipedia.org/wiki/${encodeURIComponent(s.title)}`
  }));
  return { source: 'Wikipedia', items };
}

export async function fetchPackageSummary(packageName) {
  // Example for future: fetch npm package summaries if needed
  try {
    const resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`);
    if (!resp.ok) return null;
    const data = await resp.json();
    return { name: data.name, description: data.description, homepage: data.homepage || null };
  } catch {
    return null;
  }
}
