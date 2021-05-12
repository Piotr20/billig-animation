import React from "react";
import Header from "../components/layout-elements/header";
import IntroTextimonials from "../components/introTestimonials";
import SellingPoints from "../components/sellingPoints";
import Partners from "../components/partners";
import TopVideos from "../components/topVideos";
import Contact from "../components/contact";
import Footer from "../components/layout-elements/footer";
import "../styles/styles.scss";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <IntroTextimonials />
      <Partners />
      <SellingPoints />
      <TopVideos />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
