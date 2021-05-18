import React from "react";
import ContactForm from "../components/contactForm";
import ContactIntro from "../components/contactIntro";
import ContactMap from "../components/contactMap";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";
import "../styles/styles.scss";

const ContactPage = () => {
  return (
    <main>
      <Header />
      <ContactIntro />
      <ContactMap />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default ContactPage;
