import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import navigation from "../src/navigation";
import Footer from "../src/components/footer";
import addTagline from "../src/util/addTagline";
import AppMeta from "../src/components/appMeta";

// import Alert from "../src/components/alert";

import logo from "../public/static/img/wasting-paper-text_sm.png";
import "../styles/reset.css";
import "../styles/global.scss";
import "../styles/header.scss";
import "../styles/footer.scss";
import "../styles/pages.scss";
import "../styles/posts.scss";

function closeMobileMenu() {
  if (typeof document !== "undefined") {
    document.getElementById("menu").checked = false;
  }
}
function App({ Component, pageProps }) {
  return (
    <>
      <AppMeta />
      <header>
        {/* <Alert /> */}
        <nav>
          <div className="header__container">
            <div className="brand">
              <Link href="/">
                <Image src={logo} alt={`Wasting Paper${addTagline()}`} />
              </Link>
            </div>
          </div>

          <div className="collapsible-menu">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="menu" className="menu-toggle">
              &#9776;
            </label>
            <input type="checkbox" id="menu" />
            <ul className="menu-content">
              {navigation.map((link, k) => (
                <li key={k}>
                  <Link href={link.href} onClick={closeMobileMenu()}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </div>
      </main>

      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  pageProps: PropTypes.object,
};

export default App;
