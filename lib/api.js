import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

function getPostHtml(content) {
  const body = remark().use(html).processSync(content).toString();
  return body;
}

function getPostFilenames() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  // ignore other files that are not posts
  const filteredFilenames = filenames.filter(
    (filename) => filename !== "alert.md"
  );

  return filteredFilenames;
}

export function getSiteAlert() {
  // const alertFile = path.join(process.cwd(), "posts", "alert", "alert.md");
  // const file = fs.readFileSync(alertFile, "utf8");
  // get frontmatter
  // const { data } = matter(file);
}

export function getLatestPost() {
  const filenames = getPostFilenames();
  const latestFilename = filenames.sort().pop();

  const file = fs.readFileSync(
    path.join(process.cwd(), "posts", latestFilename),
    "utf8"
  );

  // get frontmatter
  const { content, data } = matter(file);
  const body = getPostHtml(content);

  // get slug from filename
  const slug = latestFilename.replace(/\.md$/, "");

  // return combined frontmatter and slug; build permalink
  return {
    ...data,
    slug,
    body,
    permalink: `/posts/${slug}`,
    // overwrite date objects with string version, or prop serialization breaks the build
    createdAt: data?.createdAt?.toString() || data.date.toString(),
    date: data.date.toString(),
    featuredImage: data?.featuredimage ?? null,
  };
}

export function getPostBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "posts", `${slug}.md`),
    "utf8"
  );

  const { content, data } = matter(file);
  const body = getPostHtml(content);

  return {
    ...data,
    slug,
    body,
    permalink: `/posts/${slug}`,
    createdAt: data?.createdAt?.toString() || data.date.toString(),
  };
}

export function getAllPosts() {
  const filenames = getPostFilenames();

  return filenames
    .map((filename) => {
      const file = fs.readFileSync(
        path.join(process.cwd(), "posts", filename),
        "utf8"
      );

      // get frontmatter
      const { data } = matter(file);

      // get slug from filename
      const slug = filename.replace(/\.md$/, "");

      // return combined frontmatter and slug; build permalink
      return {
        ...data,
        slug,
        permalink: `/posts/${slug}`,
        createdAt: data?.createdAt?.toString() || data.date.toString(),
        date: data.date.toString(),
      };
    })
    .sort()
    .reverse();
}
