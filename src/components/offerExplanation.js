import React, { useEffect } from "react";
import WhatsNotIncluded from "./notIncluded";
import WhatsIncluded from "./whatIncluded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OfferExplaination = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-included", {
      scrollTrigger: {
        trigger: ".gsap-container-offer-eplaination",
        markers: false,
        start: "top 60%",
        end: "bottom 50%",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
    gsap.from(".gsap-anim-item-not-included", {
      scrollTrigger: {
        trigger: ".gsap-container-offer-eplaination",
        markers: false,
        start: "top 60%",
        end: "bottom 50%",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
  return (
    <section className="w-full bg-light-gray py-8  md:py-24 gsap-container-offer-eplaination">
      <div className="container flex flex-col md:flex-row md:justify-between">
        <WhatsIncluded />
        <WhatsNotIncluded />
      </div>
    </section>
  );
};
export default OfferExplaination;
