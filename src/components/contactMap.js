import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactMap = () => {
  const center = {
    lat: 56.143199650734566,
    lng: 10.150025998418958,
  };
  return (
    <section className="container py-8 md:py-24">
      <div className="rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
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
        <h4 className="text-center md:text-left pt-4 md:pt-6">
          8230 Åbyhøj, ensagervej 7, 1. sal
          <br className="md:hidden" /> CVR. 24 42343 232
        </h4>
      </div>
    </section>
  );
};
export default ContactMap;
