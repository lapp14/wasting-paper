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
      <section>
        <h1>Our Story</h1>
        <div className="panel panel-flex">
          <div className="image__polaroid">
            <Image src={polaroidPhoto} alt="Dan and Julian at the wedding" />
          </div>
          <div className="panel-content--main">
            <p className="panel__heading-text">
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
