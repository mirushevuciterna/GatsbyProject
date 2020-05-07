import React from "react";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import blogArrow from "../images/blog-arrow.png";

export const Blog = () => {
  return (
    <div>
      <div class="templatemo-container">
        <div class="container">
          <div class="row posts-container">
            <div class="post-excerpt post-excerpt-left">
              <div class="post-content">
                <h3 class="post-title">Nullam Acurna Euelis</h3>
                <p class="post-description">
                  Scondimentum siamet augue autodit sit red non neque elit edut
                  nemoen.
                </p>
              </div>
              <div class="post-date-container">
                <div class="post-month">Nov</div>
                <div class="post-date">18</div>
              </div>
              <div class="post-arrow-container rotate-arrow">
                <img src={blogArrow} alt="arrow" />
              </div>
            </div>
            <div
              class="post-excerpt post-excerpt-right"
              style={{ paddingLeft: "90px" }}
            >
              <div class="post-arrow-container">
                <img src={blogArrow} alt="arrow" />
              </div>
              <div class="post-date-container">
                <div class="post-month">Nov</div>
                <div class="post-date">19</div>
              </div>
              <div class="post-content">
                <h3 class="post-title">Condenimtin nemoa</h3>
                <p class="post-description">
                  Scondimentum siamet augue autodit sit red non neque elit edut
                  nemoen.
                </p>
              </div>
            </div>
            <div class="post-excerpt post-excerpt-left">
              <div class="post-content">
                <h3 class="post-title">Voluptatem Quial</h3>
                <p class="post-description">
                  Scondimentum siamet augue autodit sit red non neque elit edut
                  nemoen.
                </p>
              </div>
              <div class="post-date-container">
                <div class="post-month">Nov</div>
                <div class="post-date">20</div>
              </div>
              <div class="post-arrow-container rotate-arrow">
                <img src={blogArrow} alt="arrow" />
              </div>
            </div>
            <div
              class="post-excerpt post-excerpt-right"
              style={{ paddingLeft: "90px" }}
            >
              <div class="post-arrow-container">
                <img src={blogArrow} alt="arrow" />
              </div>
              <div class="post-date-container">
                <div class="post-month">Nov</div>
                <div class="post-date">21</div>
              </div>
              <div class="post-content">
                <h3 class="post-title">Augue Autioist</h3>
                <p class="post-description">
                  Scondimentum siamet augue autodit sit red non neque elit edut
                  nemoen.
                </p>
              </div>
            </div>
            <div class="post-excerpt post-excerpt-left">
              <div class="post-content">
                <h3 class="post-title">Tempori Autemos</h3>
                <p class="post-description">
                  Scondimentum siamet augue autodit sit red non neque elit edut
                  nemoen.
                </p>
              </div>
              <div class="post-date-container">
                <div class="post-month">Nov</div>
                <div class="post-date">22</div>
              </div>
              <div class="post-arrow-container rotate-arrow">
                <img src={blogArrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
