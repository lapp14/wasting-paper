import React from "react";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Wasting Paper - Contact Us</title>
      </Head>
      <section>
        <h1>Contact</h1>
        <p className="text-center">
          Wasting Paper is always looking to connect with individuals in the
          industry. If you&apos;d like to chat about booking live shows, radio,
          TV, internet thingys, promotions, signing record deals, etc., please
          contact our management team via email or on Social media.
        </p>
        <p className="text-center">
          For our <strong>FANS</strong>, please contact us through DMs on our
          Social platforms. We love you and would love to hear from you!
        </p>
        <p className="side-note text-center">
          Contact: wastingpapermusic at gmail dot com
        </p>
      </section>
    </>
  );
}
