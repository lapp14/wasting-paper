// https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/

/**
 * Priority:
 * 0 – 0.3: Old news posts, outdated guides, irrelevant pages you nevertheless don't want to delete,
 * merge, or update.
 * 4 – 0.7: Articles, blog posts, category pages, FAQs, system pages. The bulk of your site's content
 * falls into this range.
 * 8 – 1.0: Extremely important content, such as your homepage, major category pages, product pages,
 * and subdomain indexes.
 */

// eslint-disable-next-line no-unused-vars
const HIGH_FREQ = "daily";
const DEFAULT_FREQ = "weekly";
const X_LOW_FREQ = "yearly";
const LOW_FREQ = "monthly";

const HIGH_PRIORITY_PATHS = new Set(["/"]);
const LOW_FREQ_PATHS = new Set(["/about", "/contact"]);

const getPriority = (config, path) => {
  // Path log good for pipeline info
  // eslint-disable-next-line no-console
  console.log(`Path: "${path}"`);

  if (HIGH_PRIORITY_PATHS.has(path)) {
    return "1.0";
  }

  return config.priority;
};

// const getLastUpdate = (path) => {
//   if (path === "/posts") {
//     // return latest post date
//     const latestFile
//     const p = path.join(__dirname, 'posts', latestFile)
//     const file = readFileSync();
//   }
// };

const getChangeFreq = (config, path) => {
  if (LOW_FREQ_PATHS.has(path)) {
    return LOW_FREQ;
  }

  // posts
  if (path.startsWith("/posts/")) {
    return X_LOW_FREQ;
  }

  return DEFAULT_FREQ;
};

module.exports = {
  siteUrl: process.env.SITE_URL || "https://wastingpapermusic.com",
  generateRobotsTxt: true, // optional
  priority: 0.7,
  autoLastmod: false, // until we can get dynamic lastmod (if it even matters)
  transform: async (config, path) => {
    const lastmod = config.autoLastmod ? new Date().toISOString() : undefined;
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: getChangeFreq(config, path, lastmod),
      priority: getPriority(config, path),
      lastmod,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
