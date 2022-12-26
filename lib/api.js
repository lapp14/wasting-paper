import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export function getSiteAlert() {
  // const alertFile = path.join(process.cwd(), "posts", "alert", "alert.md");
  // const file = fs.readFileSync(alertFile, "utf8");
  // get frontmatter
  // const { data } = matter(file);
}

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const filteredFilenames = filenames.filter(
    (filename) => filename !== "alert.md"
  );

  return filteredFilenames.map((filename) => {
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
    };
  });
}

export function getPostBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "posts", `${slug}.md`),
    "utf8"
  );
  const { content, data } = matter(file);
  const body = remark().use(html).processSync(content).toString();

  return {
    ...data,
    body,
  };
}
