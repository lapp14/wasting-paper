import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import addTagline from "../src/util/addTagline";
import Post from "../src/components/post";
import { getLatestPost } from "../lib/api";

import bitsAndPartsCover from "../public/static/img/covers/Wasting Paper - Bits and Parts (sm).jpg";

// import spotifyIcon from "../public/static/img/social/Spotify_Icon_RGB_Green.png";
// import appleMusicIcon from "../public/static/img/social/Apple_Music_Icon.gif";
// import youtubeIcon from "../public/static/img/social/social-1_round-youtube.svg";

function Home({ latestPost }) {
  const pageTitle = `Wasting Paper${addTagline()}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <section>
        <h1>Wasting Paper</h1>
        <p>
          Welcome to the official Wasting Paper band website. We are a Rock band
          from Hamilton, Ontario. We try to make loud noises that people like to
          hear. All rights reserved. Patent pending.
        </p>
      </section>

      <section className="section--dark-translucent">
        <h2>Listen to our music</h2>
        <div className="panel">
          {/* <p className="paragraph-focus">Find our music wherever you listen</p> */}
          <p className="paragraph-focus">
            New album <strong>Bits &amp; Parts</strong> out Feb 2023.
          </p>
          <div className="panel__image">
            <Image
              src={bitsAndPartsCover}
              alt="Dan and Julian at the wedding"
            />
          </div>
        </div>
      </section>

      <section className="section--dark">
        <div className="panel panel-center">
          <div className="paragraph-focus text-center">
            Music links coming soon...
          </div>
          {/* <div className="music-locations">
            <a
              href="https://music.apple.com/ca/album/plastic-ep/1499506097"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-social music">
                <Image src={appleMusicIcon} alt="Listen on Apple Music" />
              </div>
            </a>
            <a
              href="https://open.spotify.com/album/3ryEOfFCRHAVAbY2dnMRFi"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-social music">
                <Image src={spotifyIcon} alt="Listen on Spotify" />
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=NBoUFSUeqSk"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-social music">
                <Image src={youtubeIcon} alt="Listen on YouTube" />
              </div>
            </a>
          </div> */}
        </div>
      </section>

      <section className="section--news">
        <h2>News</h2>
        <div className="section__indent">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Post {...latestPost} noPreview />
          <div className="post_home-footer">
            <a className="post__home-view-all" href="posts">
              View all news
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

Home.propTypes = {
  latestPost: PropTypes.object.isRequired,
};

export default Home;

export function getStaticProps() {
  return {
    props: {
      latestPost: getLatestPost(),
    },
  };
}
