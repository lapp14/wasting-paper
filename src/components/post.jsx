import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function postContent(excerpt, body, noPreview) {
  if (noPreview) {
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: body }} />;
  }

  return <p>{excerpt}</p>;
}

// `noPreview = true` will show full article, not excerpt
function Post({ slug, permalink, excerpt, title, createdAt, body, noPreview }) {
  const prettyDate = new Date(createdAt).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <article className="post__container" key={slug}>
      <h3 className="post__header">
        <Link href={permalink}>{title}</Link>
      </h3>

      <div className="post__content">
        <time className="post__datetime" dateTime={createdAt}>
          {prettyDate}
        </time>
        <hr />
        <div className="post__body">
          {postContent(excerpt, body, noPreview)}
        </div>
      </div>

      {!noPreview ? <Link href={permalink}>Read more →</Link> : null}
    </article>
  );
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string,
  noPreview: PropTypes.bool,
};

export default Post;
