import { Box,AspectRatio } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fetchstatelist } from "../Redux/action";
import { Place } from "./Place";

export const Map = () => {
  const store=useSelector((store)=>store.LocationData)
  const address = useSelector((store) => store.LocationData.addressdetail);
  const [state,setState]=useState("");
  const [num,setNum]=useState(0);
  const dispatch=useDispatch();
  useEffect(()=>{
     if(num===0){
      setState(address.features[0].properties.state)
      
      setNum((num)=>num+1)
     }
  })
  console.log(address)
  console.log(state)
  console.log(store)
  return (
    <Box>
      <AspectRatio maxW='460px' ratio={20/10} >
        <iframe
          width="45%"
          height="300"
          loading="lazy"
          allowFullscreen
          src= {`https://www.google.com/maps/embed/v1/place?key=AIzaSyDHhgsc3KucyNa3_56r8YbhquY5WWs0EDI&q=${state}`}
          id="map"
        ></iframe>
      </AspectRatio>
      {state!=""&&<Place state={state}/>}
    </Box>
  );
};
