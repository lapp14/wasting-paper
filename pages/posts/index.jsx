import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { getAllPosts } from "../../lib/api";
import Post from "../../src/components/post";

function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Wasting Paper - Blog Posts</title>
      </Head>
      <section className="post">
        <h1>Posts</h1>

        {posts.map((post) => (
          <div className="posts__list-item">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Post {...post} key={post.slug} />
          </div>
        ))}
      </section>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
