import React from "react";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const Reusable = ({ title, info }) => {
  return (
    <div class="templatemo-container section-shadow-bottom">
      <div class="container">
        <div class="row section-title-container">
          <div class="col-lg-12 text-uppercase text-center">
            <h2 class="section-title">{title}</h2>
            <div class="section-title-underline-blue"></div>
            <hr></hr>
            <p class="small" style={{ color: "#333333" }}>
              {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reusable;
