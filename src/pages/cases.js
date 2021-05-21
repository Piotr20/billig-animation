import React from "react";
import CasesShowcase from "../components/cassesCarusel";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import SEO from "../components/Seo";
import "../styles/styles.scss";

const CasesPage = () => {
  // Cases page and it's imported components as well as metadata
  return (
    <>
      <SEO
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
