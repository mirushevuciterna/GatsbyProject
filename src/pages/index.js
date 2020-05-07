import React from "react";
import Layout from "../components/Layout";
import HeaderImage from "../components/HeaderImage";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Reusable from "../components/Reusable";
import Description from "../components/Description";
import Blog from "../components/Blog";
import Features from "../components/Features";

import "../components/layout.css";

export default () => (
  <Layout>
    <HeaderImage />
    <Banner
      title="Welcome"
      info="Multi Profile is free responsive website template for everyone. Feel free to download and use this template for your websites. Thank you for visiting templatemo."
    ></Banner>
    <Reusable title="Slider" info="LOREM IP SUMS"></Reusable>
    <Slider />
    <Description></Description>
    <Reusable title="BLOG" info="PROIN GRAVIDANI">
      {" "}
    </Reusable>
    <Blog></Blog>
    <Features></Features>
  </Layout>
);
