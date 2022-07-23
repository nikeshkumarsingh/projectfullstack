import {Box}from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fetchplace, Fetchstatelist } from "../Redux/action";
export const Place=({state})=>{
    const store=useSelector((store)=>store.LocationData)
    const dispatch=useDispatch();
    const stat=useSelector((store)=>store.LocationData.nav);
    const [num,setNum]=useState(0);
    const getdta=()=>{
        dispatch(Fetchplace(store.state_list._id));
        getplace()
    }
    if( num===0){
        console.log(state)
        dispatch(Fetchstatelist(state))
        setNum((num)=>num+1)
        getdta()
    }
    console.log(store.state_list._id)
  const getplace=()=>{
    dispatch(Fetchplace(store.state_list._id));
  }
    
    return(
        <Box>

        </Box>
    )
}