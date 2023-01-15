import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../../lib/api";

function Post({ post }) {
  const pageTitle = `Wasting Paper - ${post.title}`;
  const prettyDate = new Date(post.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className="section--news">
        <article className="post__container">
          <h1 className="post__header">{post.title}</h1>

          <div className="post__content">
            <time className="post__datetime" dateTime={post.createdAt}>
              {prettyDate}
            </time>
            <hr />
            <div className="post__body">
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
          </div>

          <Link href="/posts">View all posts</Link>
        </article>
      </section>
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
