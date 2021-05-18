import React from "react";
import CasesShowcase from "../components/cassesCarusel";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import "../styles/styles.scss";

const CasesPage = () => {
  return (
    <main>
      <Header />
      <CasesShowcase />
      <Footer />
    </main>
  );
};

export default CasesPage;
