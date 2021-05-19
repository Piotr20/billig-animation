import React from "react";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import MarketingSection from "../components/marketingSection";
import OfferExplaination from "../components/offerExplanation";
import Pricing from "../components/priceBoxes";
import PriceMatch from "../components/priceMatch";
import InteractiveVideo from "../components/interactiveStyletileVideo";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import "../styles/styles.scss";

const PricesPage = () => {
  return (
    <>
      <SEO
        title="Priser"
        description="prices page describing how much the services cost"
        keywords="cheap quality animation Danish marketing money "
      />
      <main>
        <Header />
        <Pricing />
        <OfferExplaination />
        <InteractiveVideo />
        <MarketingSection />
        <PriceMatch />
        <Footer />
      </main>
    </>
  );
};

export default PricesPage;
