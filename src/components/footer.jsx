import React from "react";
import { phone } from "phone";
import Link from "next/link";
import Image from "next/image";
import navigation from "../navigation";
import profile from "../profile";

const SOCIAL_ICON_COLOR = "white"; // white or black
const SOCIAL_ICON_WIDTH = 36;

const telephone = phone(profile.telephone);

if (!telephone.isValid) {
  throw new Error("Invalid telephone number in `profile.js`");
}

function closeMobileMenu() {
  if (typeof document !== "undefined") {
    document.getElementById("menu").checked = false;
  }
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-brand--link">
            <Link href="/">Brand</Link>
          </span>
          <div className="footer-address">
            {profile.address.map((line, i) => (
              <React.Fragment key={`footer-address--line-${i}`}>
                <span>{line}</span>
                <br />
              </React.Fragment>
            ))}
          </div>
          <a href={`tel:${telephone.phoneNumber}`} className="footer-telephone">
            {profile.telephone}
          </a>

          <div className="footer-social">
            {/* Social icons courtesy of https://www.iconfinder.com/icons/7693327 */}
            {Object.entries(profile.social).map(
              ([socialName, socialValues]) => (
                <div
                  className="footer-social--icon"
                  key={`footer-social--icon-${socialName}`}
                >
                  <a
                    href={profile.social[socialName].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={SOCIAL_ICON_WIDTH}
                      height={SOCIAL_ICON_WIDTH}
                      src={`/static/img/social/${socialName}-${SOCIAL_ICON_COLOR}.svg`}
                      alt={socialValues.alt}
                    />
                  </a>
                </div>
              )
            )}
          </div>
        </div>
        <div className="footer-links">
          <ul>
            {navigation.map((link, k) => (
              <li key={k}>
                <Link href={link.href} onClick={closeMobileMenu()}>
                  {link.title}
                </Link>
                {/* TODO: Support submenu */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
