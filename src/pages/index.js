import React from "react";
import { graphql } from "gatsby";
import Header from "../components/layout-elements/header";
import IntroTextimonials from "../components/introTestimonials";
import SellingPoints from "../components/sellingPoints";
import Partners from "../components/partners";
import TopVideos from "../components/topVideos";
import Contact from "../components/contact";
import Footer from "../components/layout-elements/footer";
import SEO from "../components/Seo";
import "../styles/styles.scss";

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Forside"
        description="frontpage for billig animation website, company making cheap and quality animations"
        keywords="cheap quality animation Danish"
      />
      <main>
        <Header />
        <IntroTextimonials />
        <Partners />
        <SellingPoints />
        <TopVideos />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
