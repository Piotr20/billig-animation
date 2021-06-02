import React from "react";
import InteractiveVideo from "../components/interactiveStyletileVideo";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import ProductionMarketing from "../components/productionMarketing";
import ProductionSteps from "../components/productionSteps";
import SEO from "../components/Seo";
import "../styles/styles.scss";

const ProcessPage = () => {
  // Process page and it's imported components as well as metadata
  return (
    <>
      <SEO
        title="Proces"
        description="process page explaining how company works and how the process works important for clients"
        keywords="animation Danish marketing process explainatory"
      />
      <main>
        <Header />
        <ProductionSteps />
        <InteractiveVideo />
        <ProductionMarketing />
        <Footer footerClass="mt-4 md:mt-12 xl:mt-20" />
      </main>
    </>
  );
};

export default ProcessPage;
