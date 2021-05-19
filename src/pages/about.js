import React from "react";
import AboutIntro from "../components/aboutIntro";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import OurHistory from "../components/ourHistry";
import Team from "../components/team";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import "../styles/styles.scss";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="Om os"
        description="About page with team info and company history"
        keywords="animation Danish company's story Billig-animation"
      />
      <main>
        <Header />
        <AboutIntro />
        <OurHistory />
        <Team />
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
