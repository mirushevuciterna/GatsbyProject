import React from "react";
import styles from "../css/footer.module.css";
import links from "../constants/links";
import { Link } from "gatsby";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  return (
    <>
      <div className="blue-divider effect1">
        <div className="dark-blue-bg"></div>
        <div className="blue-divider-bg-graphic"></div>
        <div className="blue-bg"></div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
              <Link key={index} to={item.mpat}>
                {item.text}
              </Link>
            );
          })}
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 footer-block">
          <h3 class="text-uppercase">About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            malesuada lacus vel tristique rhoncus. Vivamus vel molestie odio.
            Curabitur pulvinar, diam at pharetra euismod, augue felis pretium
            est, sit amet accumsan dui enim nec tortor. Cras lobortis feugiat
            enim. Aliquam rhoncus pharetra ligula accumsan sodales. Donec
            blandit sed justo quis sollicitudin. Nulla et leo id purus suscipit
            rhoncus ut at purus. Suspendisse molestie sodales porttitor. Vivamus
            et vulputate augue. Etiam et eleifend purus, in sagittis nisi.
            Vivamus laoreet metus ut nisl euismod molestie. In non lacus
            placerat ipsum placerat dapibus eu vel arcu.
          </p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 footer-block">
          <h3 class="text-uppercase">Resources</h3>
          <ul>
            <li>
              <a href="#">Aenean leogula</a>
            </li>
            <li>
              <a href="#">Porttitor euconsequat</a>
            </li>
            <li>
              <a href="#">Vitae eleifend ac enim</a>
            </li>
            <li>
              <a href="#">Aliquam lorante</a>
            </li>
            <li>
              <a href="#">Phasellus viverra nulla</a>
            </li>
            <li>
              <a href="#">Dmetus varius</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 footer-block">
          <h3 class="text-uppercase">Features</h3>
          <ul>
            <li>
              <a href="#">lorem quis bibendum</a>
            </li>
            <li>
              <a href="#">Auctor nisi elit conser</a>
            </li>
            <li>
              <a href="#">at ipsum, nec sagittis</a>
            </li>
            <li>
              <a href="#">Duis sed odio sit amet</a>
            </li>
            <li>
              <a href="#">Fnibh vulpu</a>
            </li>
            <li>
              <a href="#">ftate cursus a sit amet</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="text-center">
        <p class="small copyright-text">Copyright © 2084 Company Name</p>
      </div>
    </>
  );
};

export default Footer;
