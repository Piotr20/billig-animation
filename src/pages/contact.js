import React from "react";
import ContactForm from "../components/contactForm";
import ContactIntro from "../components/contactIntro";
import ContactMap from "../components/contactMap";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import SEO from "../components/Seo";
import "../styles/styles.scss";

const ContactPage = () => {
  // Contact page and it's imported components as well as metadata
  return (
    <>
      <SEO
        title="Kontakt"
        description="Contact page with all the contact info and map"
        keywords="animation Danish contact info map reach"
      />
      <main>
        <Header />
        <ContactIntro />
        <ContactMap />
        <ContactForm />
        <Footer footerClass="mt-4 md:mt-12 xl:mt-20" />
      </main>
    </>
  );
};

export default ContactPage;
