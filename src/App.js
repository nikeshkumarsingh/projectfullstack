
import './App.css';
import Nav from './components/nav';
import { useEffect, useState } from 'react';
import {Map}from "./components/map";
function App() {
  const [lat,setLat]=useState(null);
  const [long,setLong]=useState(null);
  const [error,setError]=useState("");
  const [num,setNum]=useState(0);
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
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
  console.log(lat,long)
  return (
    <div className="App">
     {/* <Nav/> */}
      <Map lat={lat} long={long} />

    </div>
  );
}

export default App