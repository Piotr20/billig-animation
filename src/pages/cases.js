import React from "react";
import CasesShowcase from "../components/cassesCarusel";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import Seo from "../components/seo";
import "../styles/styles.scss";

const CasesPage = () => {
  return (
    <>
      <Seo
        title="Cases"
        description="Cases page with all the projects and client cases"
        keywords="animation Danish Europe clients cases projects"
      />
      <main>
        <Header />
        <CasesShowcase />
        <Footer />
      </main>
    </>
  );
};

export default CasesPage;
