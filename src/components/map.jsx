import { Box } from "@chakra-ui/react";
import { useState } from "react";


export const Map = ({ lat, long }) => {
  const [state,setState]=useState("");
    var requestOptions = {
      method: 'GET',
    };
    
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=685f04bd1e7443348d845bf57afff5fc`, requestOptions)
      .then(response => response.json())
      .then(result => setState(result.features[0].properties.state))
      .catch(error => console.log('error', error));
  return (
    <Box>
      <iframe
        width="45%"
        height="300"
        loading="lazy"
        allowfullscreen
        src= {`https://www.google.com/maps/embed/v1/place?key=AIzaSyDHhgsc3KucyNa3_56r8YbhquY5WWs0EDI&q=${state}`}
        id="map"
      ></iframe>
    </Box>
  );
};
