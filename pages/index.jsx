import React from "react";
import Head from "next/head";
import Script from "next/script";
import { attributes, react as HomeContent } from "../content/list.md";

export default function Home() {
  const { title, list } = attributes;
  return (
    <>
      <Head>
        <title>Homepage</title>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <section>
        <h1>First Header</h1>
        <p>
          Welcome to our website. This website is here to help everyone. It is a
          great website. Perhaps the best anyone has ever seen. We sure hope
          this is the case. I am not too sure why I am still typing, to be
          honest, I feel like this has already gone too far. Oh well...
        </p>

        <p>
          Here is the next paragraph. This will probably be the same as the last
          one. It may be the greatest paragraph ever written. Who knows... It
          might be great. It might be the greatest paragraph we've ever seen,
          who knows.
        </p>

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
