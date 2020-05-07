import React from "react";
import styles from "../css/slider.module.css";
import links from "../constants/links";
import { Link } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import next from "../images/carousel-arrow-next.png";
import previous from "../images/carousel-arrow-previous.png";
import img01 from "../images/1.jpg";
import img02 from "../images/2.jpg";
import img03 from "../images/3.jpg";

export const Slider = () => {
  return (
    <>
      <div className="templatemo-container section-shadow-bottom">
        <div className="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <h3 class="section-title-2 text-uppercase font-weight-300">
                <b>Morbi</b> <span class="blue-text">Accumsan</span>
              </h3>
              <p className={styles.p1}>
                Credit goes to <a href="http://unsplash.com">Unsplash</a> for
                images used in this template. Morbi dapibus rhoncus nulla ac
                tempus. Integer felis lorem, fermentum quis nisl accumsan,
                gravida gravida est. Cras ultrices rhoncus dui ut laoreet. Fusce
                tincidunt, urna a imperdiet tempor, orci dolor dictum elit, sit
                amet malesuada mauris magna eget dolor. Morbi ornare convallis
                vulputate. Donec ut suscipit nisl, ac elementum nisi.
              </p>
              <ul class="gray-text ul-1">
                <li>Sed non mauris vitae erat consequat auctor</li>
                <li>Class aptent taciti sociosqu</li>
                <li>Wonubia nostra, per inceptos himeos</li>
              </ul>
              <a href="#" class="btn-blue-gradient">
                Prima Liuam
              </a>
              <a href="#" class="btn-transparent">
                Prima Liuam
              </a>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="carousel-container">
                <div class="crsl-items" data-navigation="navbtns">
                  <div class="crsl-wrap">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          src={img01}
                          alt="Image"
                          class="img-responsive img-thumbnail"
                        />
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          src={img02}
                          alt="Image"
                          class="img-responsive img-thumbnail"
                        />
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          src={img03}
                          alt="Image"
                          class="img-responsive img-thumbnail"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
              <div class="crsl-nav">
                <a href="#" class="previous">
                  <img
                    src={previous}
                    alt="previous"
                    style={{ height: "31px", width: "31px" }}
                  />
                </a>
                <a href="#" class="next">
                  <img
                    src={next}
                    alt="next"
                    style={{ height: "31px", width: "31px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
