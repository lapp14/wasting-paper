import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Post({ slug, permalink, excerpt, title, createdAt }) {
  const prettyDate = new Date(createdAt).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <article key={slug}>
      <h3>
        <Link href={permalink}>{title}</Link>
      </h3>

      <time dateTime={createdAt}>{prettyDate}</time>

      <p>{excerpt}</p>

      <Link href={permalink}>Read more →</Link>
    </article>
  );
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Post;
