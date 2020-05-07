import React from "react";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Features = () => {
  return (
    <div>
      <div class="templatemo-container features">
        <div class="container features-content">
          <div class="row section-title-container">
            <div
              class="col-lg-12"
              style={{
                textAlign: "center",
                paddingTop: "35px",
              }}
            >
              <h2 class="section-title">Features</h2>

              <hr style={{ backgroundColor: "white" }}></hr>
              <p class="small">Proin Gravidani</p>
            </div>
          </div>
          <div class="row" style={{ paddingBottom: "40px" }}>
            <div class="feature-container">
              <p
                class="text-center margin-bottom-30 gray-text"
                style={{ background: "transparent" }}
              >
                Consequat ipsum, nex sagittis sem nibh id elit. Duis sed odio
                sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio.
              </p>
              <div class="tm-progress-container tm-progress-container-left">
                <div class="tm-progress-label">
                  <p class="pull-left">Wordpress</p>
                  <p class="pull-right">80%</p>
                </div>
                <div class="progress tm-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    <span class="sr-only">80% Complete</span>
                  </div>
                </div>
              </div>
              <div class="tm-progress-container tm-progress-container-right">
                <div class="tm-progress-label">
                  <p class="pull-left">SEO</p>
                  <p class="pull-right">75%</p>
                </div>
                <div class="progress tm-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  >
                    <span class="sr-only">75% Complete</span>
                  </div>
                </div>
              </div>
              <div class="tm-progress-container tm-progress-container-left">
                <div class="tm-progress-label">
                  <p class="pull-left">Web Design</p>
                  <p class="pull-right">90%</p>
                </div>
                <div class="progress tm-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    <span class="sr-only">90% Complete</span>
                  </div>
                </div>
              </div>
              <div class="tm-progress-container tm-progress-container-right">
                <div class="tm-progress-label">
                  <p class="pull-left">UX</p>
                  <p class="pull-right">86%</p>
                </div>
                <div class="progress tm-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "86%" }}
                  >
                    <span class="sr-only">86% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-overlay"></div>
      </div>
    </div>
  );
};

export default Features;
