import React from "react";
import "./Contact.css";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMapComponent/GoogleMap";
import Footer from "./FooterComponent/Footer";
export default function Cantact() {
  return (
    <div id="contact">
      <h1>Contact Me 📲</h1>
      <ContactAddress />
      <ContactForm />
      <GoogleMap />
      <Footer />
    </div>
  );
}
