import React from "react";
import WhatsNotIncluded from "./notIncluded";
import WhatsIncluded from "./whatIncluded";

const OfferExplaination = () => {
  return (
    <section className="w-full bg-light-gray py-8  md:py-24 ">
      <div className="container flex flex-col md:flex-row md:justify-between">
        <WhatsIncluded />
        <WhatsNotIncluded />
      </div>
    </section>
  );
};
export default OfferExplaination;
