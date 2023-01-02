import React from "react";
import Head from "next/head";
import Image from "next/image";
import polaroidPhoto from "../public/static/img/polaroid-tilt.png";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Us</h1>
      <section>
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
      </section>
    </>
  );
}
