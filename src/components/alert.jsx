import React from "react";
import FmdBad from "@mui/icons-material/FmdBad";
import Cancel from "@mui/icons-material/Cancel";
import { getSiteAlert } from "../../lib/api";

class Alert extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  closeAlert() {
    if (document) {
      document.getElementById("site-alert").remove();
    }
  }

  render() {
    return (
      <div id="site-alert" className="site-alert">
        <div className="site-alert--content">
          <div className="site-alert--icon">
            <FmdBad />
          </div>
          <div className="site-alert--body">
            <span className="site-alert--title">Alert Title</span>
            <p className="site-alert--text">
              {JSON.stringify(getSiteAlert())}
              We have an alert. We are sorry for the inconvenience. Please try
              back later.
            </p>
          </div>
          <div className="site-alert--icon">
            <button type="button" onClick={() => this.closeAlert()}>
              <Cancel />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Alert;
