import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../../lib/api";

// Used on `posts/slug` pages

function Post({ title, body, createdAt, featuredImage }) {
  const pageTitle = `Wasting Paper - ${title}`;
  const prettyDate = new Date(createdAt).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  // eslint-disable-next-line prettier/prettier
  const htmlBody = `${featuredImage ? `<img src="/${featuredImage}" class="post__featured-image"/>` : ""} ${body} <div style="clear: both"></div>`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className="section--news">
        <article className="post__container">
          <h1 className="post__header">{title}</h1>
          <div className="post__content">
            <time className="post__datetime" dateTime={createdAt}>
              {prettyDate}
            </time>
            <hr />
            <div className="post__body">
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: htmlBody }} />
            </div>
          </div>

          <Link href="/posts">View all posts</Link>
        </article>
      </section>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
};

export default Post;

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      title: post.title,
      body: post.body,
      createdAt: post.createdAt,
      featuredImage: post.featuredimage,
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
