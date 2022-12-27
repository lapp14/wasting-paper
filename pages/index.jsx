import React from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import polaroidPhoto from "../public/static/img/polaroid-tilt.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wasting Paper - a rock band</title>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <section>
        <h1>Wasting Paper</h1>
        <p>
          Welcome to our website. This website is here to help everyone. It is a
          great website. Perhaps the best anyone has ever seen. We sure hope
          this is the case. I am not too sure why I am still typing, to be
          honest, I feel like this has already gone too far. Oh well...
        </p>

        <h2>Our Story</h2>
        <div className="panel">
          <div className="image__polaroid">
            <Image src={polaroidPhoto} alt="Dan and Julian at the wedding" />
          </div>
          <div className="panel-content--main">
            <p>
              These two idiots started this band<strong>*</strong>
            </p>
            <p className="side-note">
              <strong>* Note:</strong> John Thomas is a rock band from Hamilton,
              Ontario. Started by Julian and Dan, they just try and make loud
              noises that people like to hear. All rights reserved. Patent
              pending.
            </p>
          </div>
        </div>

        <h2>Second Header</h2>
        <p>I just copied this, full disclosure.</p>
        <p>
          Here is the next paragraph. This will probably be the same as the last
          one. It may be the greatest paragraph ever written. Who knows... It
          might be great. It might be the greatest paragraph we've ever seen,
          who knows.
        </p>
      </section>
    </>
  );
}
