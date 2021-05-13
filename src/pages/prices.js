import React from "react";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import MarketingSection from "../components/marketingSection";
import OfferExplaination from "../components/offerExplanation";
import Pricing from "../components/priceBoxes";
import PriceMatch from "../components/priceMatch";
import "../styles/styles.scss";

const PricesPage = () => {
  return (
    <main>
      <Header />
      <Pricing />
      <OfferExplaination />
      <MarketingSection />
      <PriceMatch />
      <Footer />
    </main>
  );
};

export default PricesPage;
