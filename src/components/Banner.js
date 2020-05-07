import React from "react";
import welcomeDivider from "../images/welcome-divider-lines.png";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Banner = ({ title, info }) => {
  return (
    <div>
      <div class="welcome-container">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="welcome-wrapper">
                <h2 class="welcome-title text-uppercase">{title}</h2>
                <img
                  src={welcomeDivider}
                  alt="Welcome divider"
                  class="welcome-divider-lines-img"
                />
                <p class="welcome-description">{info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
