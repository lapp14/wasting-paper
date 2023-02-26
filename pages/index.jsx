import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import addTagline from "../src/util/addTagline";
import Post from "../src/components/post";
import { getLatestPost } from "../lib/api";

import bitsAndPartsCover from "../public/static/img/covers/Wasting Paper - Bits and Parts (sm).jpg";
import wtsmCover from "../public/static/img/covers/Wasting Paper - Wrong to Save Me (sm).jpg";

import spotifyIcon from "../public/static/img/social/Spotify_Icon_RGB_Green.png";
import appleMusicIcon from "../public/static/img/social/Apple_Music_Icon.gif";
import youtubeIcon from "../public/static/img/social/social-1_round-youtube.svg";

const albumCoverStyle = { maxWidth: "360px" };

function Home({ latestPost }) {
  const pageTitle = `Wasting Paper${addTagline()}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <section className="section--dark-translucent">
        <h1 className="brand-header">
          Welcome to the official Wasting Paper band website
        </h1>
      </section>
      <section className="section--dark text-center">
        <p>
          We are a Rock band from Hamilton, Ontario. We try to make loud noises
          that people like to hear.
        </p>
        <p className="side-note">All rights reserved. Patent pending.</p>
      </section>

      <section className="section--dark-translucent">
        <div className="panel panel-flex">
          <p className="panel-flex--content-main paragraph-focus">
            New album <strong>Bits &amp; Parts</strong> out March&nbsp;10th.
          </p>
          <div className="panel__image" style={albumCoverStyle}>
            <Image
              src={bitsAndPartsCover}
              alt="Bits and Parts album cover by Wasting Paper"
            />
          </div>
        </div>
      </section>

      <section className="section--dark">
        <div className="panel panel-flex">
          <div className="panel__image" style={albumCoverStyle}>
            <Image
              src={wtsmCover}
              alt="Wrong to save me single cover by Wasting Paper"
            />
          </div>
          <div className="panel-flex--content-main">
            <p className="paragraph-focus">
              Single <strong>Wrong to Save Me</strong> out now!
            </p>
            <div className="music-locations" style={{ marginTop: "32px" }}>
              <a
                href="https://music.apple.com/us/album/wrong-to-save-me/1671198941?i=1671198942"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-social music__small">
                  <Image src={appleMusicIcon} alt="Listen on Apple Music" />
                </div>
              </a>
              <a
                href="https://open.spotify.com/track/04pTnjhboOZHsbyJFBjlNn?si=zqcTX_o0R-aCKt2eCnER6w"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-social music__small">
                  <Image src={spotifyIcon} alt="Listen on Spotify" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=5SD1NsUKHVA"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon-social music__small">
                  <Image src={youtubeIcon} alt="Listen on YouTube" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section--dark">
        <div className="panel panel-center">
          <div className="paragraph-focus text-center">
            Find our music wherever you listen
          </div>
          <div className="music-locations">
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
          </div>
        </div>
      </section> */}

      <section className="section--news">
        <h2>News</h2>
        <div className="section__indent">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Post {...latestPost} noPreview />
          <div className="post_home-footer">
            <div className="post__view-all-link">
              <a className="post__home-view-all" href="posts">
                View all news
              </a>
            </div>
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
