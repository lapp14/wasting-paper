import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/api";

function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <Head>
        <title>Blog Post - {post.title}</title>
      </Head>
      <div className="post">
        <h1>{post.title}</h1>
        <time dateTime={post.createdAt}>{prettyDate}</time>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;

export function getStaticProps({ params }) {
  return {
    props: {
      post: getPostBySlug(params.slug),
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
