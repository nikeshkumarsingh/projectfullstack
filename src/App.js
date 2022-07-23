
import './App.css';
import Nav from './components/nav';
import { Box } from '@chakra-ui/react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import {Map}from "./components/map";
import { Fetchdata, FetchWather, Savelat, Savelong } from './Redux/action';
import { Place } from './components/Place';
function App() {
  const dispatch = useDispatch();
  const status=useSelector((store)=>store.LocationData.nav)
  const [error,setError]=useState("");
  const [num,setNum]=useState(0);
  const [sep,setSep]=useState(false);
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
       
        dispatch(Savelat(coords.latitude))
        dispatch(Savelong(coords.longitude))
        dispatch(Fetchdata(coords.latitude,coords.longitude))
        dispatch(FetchWather(coords.latitude,coords.longitude))
        setSep(true)
      }, (error) => {
        setError('Something went wrong getting your location!')
      })
    }
  }
  useEffect(()=>{
    if(num===0){
      getUserCoordinates();
      setNum((num)=>num+1);
      
    }
    
  })
  
  return (
    <div className="App">
     <Nav/>
     {!status &&<Box fontSize={"24px"}>loading...</Box>}
     {status&&<Map/>}
      {/* <Place/> */}
    </div>
  );
}

export default App