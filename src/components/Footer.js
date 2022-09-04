import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {

  return (
    <footer>
      Footer
      <Link className="navbar-item" to="/contact">
        Contact
      </Link>
    </footer>
  );
};

export default Footer;
