import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactMap = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-contact-map", {
      scrollTrigger: {
        trigger: ".gsap-container-contact-map",
        markers: false,
        start: "top 60%",
        end: "bottom 50%",
      },
      stagger: 0.05,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
  const center = {
    lat: 56.143199650734566,
    lng: 10.150025998418958,
  };
  return (
    <section className="container py-8 md:py-24 gsap-container-contact-map">
      <div className="rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 gsap-anim-item-contact-map">
        <LoadScript googleMapsApiKey="AIzaSyC23jEQlOoKqNOGeVl15fcqbU1HsFcTJJg">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "50vh" }}
            center={center}
            zoom={13}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <>
              <Marker position={center} />
            </>
          </GoogleMap>
        </LoadScript>
        <h3 className="text-center md:text-left pt-4 md:pt-6">
          8230 Åbyhøj, ensagervej 7, 1. sal
          <br className="md:hidden" /> CVR. 24 42343 232
        </h3>
      </div>
    </section>
  );
};
export default ContactMap;
