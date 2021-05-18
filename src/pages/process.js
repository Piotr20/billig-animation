import React from "react";
import InteractiveVideo from "../components/interactiveStyletileVideo";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import ProductionMarketing from "../components/productionMarketing";
import ProductionSteps from "../components/productionSteps";
import "../styles/styles.scss";

const ProcessPage = () => {
  return (
    <main>
      <Header />
      <ProductionSteps />
      <InteractiveVideo />
      <ProductionMarketing />
      <Footer />
    </main>
  );
};

export default ProcessPage;
