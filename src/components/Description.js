import React from "react";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img04 from "../images/4.jpg";
import img05 from "../images/5.jpg";
import img06 from "../images/6.jpg";
import JSONData from "../content/My-JSON-Content.json";

export const Description = () => {
  return (
    <div>
      <div class="templatemo-container light-gray-bg section-shadow-bottom">
        <div class="container">
          <div class="row section-title-container">
            <div
              class="col-lg-12 text-uppercase text-center"
              style={{ backgroundColor: "#F2F2F2" }}
            >
              <h2 class="section-title">Who we are</h2>
              <div class="section-title-underline-blue"></div>
              <hr></hr>
              <p class="small">Proin Gravidani</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5 col-md-5">
              <div class="tm-blocks-container effect1">
                <div class="tm-block green-bg">
                  <a href="#" class="tm-block-link">
                    Technologies
                  </a>
                </div>
                <div class="tm-block">
                  <img src={img04} alt="Image" class="img-responsive" />
                </div>
                <div class="tm-block">
                  <img src={img05} alt="Image" class="img-responsive" />
                </div>
                <div class="tm-block red-bg">
                  <a href="#" class="tm-block-link">
                    Vision
                  </a>
                </div>
                <div class="tm-block yellow-bg">
                  <a href="#" class="tm-block-link">
                    Awards
                  </a>
                </div>
                <div class="tm-block">
                  <img src={img06} alt="Image" class="img-responsive" />
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-7">
              <h3 class="section-title-2 text-uppercase font-weight-300">
                <b>Our</b> <span class="blue-text">Technologies</span>
              </h3>
              {JSONData.content.map((data, index) => {
                return (
                  <p
                    class="justify-text"
                    style={{
                      color: "#333333",
                      fontSize: "14px",
                      lineHeight: "1.42857143",
                    }}
                    key={`content_item_${index}`}
                  >
                    {data.item}
                  </p>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
