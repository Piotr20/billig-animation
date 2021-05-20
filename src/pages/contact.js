import React from "react";
import ContactForm from "../components/contactForm";
import ContactIntro from "../components/contactIntro";
import ContactMap from "../components/contactMap";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import SEO from "../components/Seo";
import "../styles/styles.scss";

const ContactPage = () => {
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
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
