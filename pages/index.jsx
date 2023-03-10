import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import addTagline from "../src/util/addTagline";
import Post from "../src/components/post";
import { getLatestPost } from "../lib/api";

import bitsAndPartsCover from "../public/static/img/covers/Wasting Paper - Bits and Parts (sm).jpg";

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
        <div className="panel panel-flex">
          <div className="panel-flex--content-main">
            <div className="section__content translucent-content">
              <p className="paragraph-focus">
                New album <strong>Bits &amp; Parts</strong> out now!
              </p>
              <p>Listen wherever you stream</p>
              <div className="music-locations" style={{ marginTop: "32px" }}>
                <a
                  href="https://music.apple.com/us/album/bits-parts-ep/1672276828"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-social music__small">
                    <Image
                      src={appleMusicIcon}
                      alt="Listen to Bits and Parts on Apple Music"
                    />
                  </div>
                </a>
                <a
                  href="https://open.spotify.com/album/5kg9UTUl4EfGnyltkU9ZCW?si=2AwcNxbVTASshUcQUuum3Q"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-social music__small">
                    <Image
                      src={spotifyIcon}
                      alt="Listen to Bits and Parts on Spotify"
                    />
                  </div>
                </a>
                <a
                  href="https://music.youtube.com/playlist?list=OLAK5uy_npNITimJ5d5RPv0_TMxBWZEMsFzdpw6sw&feature=share"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-social music__small">
                    <Image
                      src={youtubeIcon}
                      alt="Listen to Bits and Parts on YouTube music"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
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
          <div className="panel-flex--content-main">
            <p className="paragraph-focus">
              Check out the <strong>Wrong to Save Me</strong> music video
            </p>
            <div className="video-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/At2T6yh2afc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </section>

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
