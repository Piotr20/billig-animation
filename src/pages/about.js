import React from "react";
import AboutIntro from "../components/aboutIntro";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import OurHistory from "../components/ourHistry";
import Team from "../components/team";
import "../styles/styles.scss";

const AboutPage = () => {
  return (
    <main>
      <Header />
      <AboutIntro />
      <OurHistory />
      <Team />
      <Footer />
    </main>
  );
};

export default AboutPage;
