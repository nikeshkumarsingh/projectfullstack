import { Box } from "@chakra-ui/react";
import Geocode from "react-geocode";

export const Map = ({ lat, long }) => {
    Geocode.setApiKey("AIzaSyA9_2X7a28z-Cs7dskkk2ODTyKtNwiatyc");
    Geocode.setLanguage("en");
    Geocode.fromLatLng(lat, long).then(
        (response) => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        (error) => {
          console.error(error);
        }
      );
  return (
    <Box>
      {/* <iframe
        width="45%"
        height="300"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDHhgsc3KucyNa3_56r8YbhquY5WWs0EDI&q=Space+Needle,Seattle+WA"
        id="map"
      ></iframe> */}
    </Box>
  );
};
