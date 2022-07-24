import {Box, Image, Text}from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fetchplace, Fetchstatelist } from "../Redux/action";
export const Place=({state})=>{
    const store=useSelector((store)=>store.LocationData)
    const dispatch=useDispatch();
    const stat=useSelector((store)=>store.LocationData.nav);
    const [num,setNum]=useState(0);
  
    //  const getdta=()=>{
    //     const mainstore=useSelector((store)=>store.LocationData.state_list._id)
    //     console.log(mainstore)
    //    console.log(store.state_list._id)
    //      dispatch(Fetchplace(store.state_list._id));
    //    //getplace()
    //  }
    if( num===0){
        console.log(state)
        dispatch(Fetchstatelist(state))
        setNum((num)=>num+1)
        //getdta()
    }

   
  //   console.log(store)
    return(
        <Box>
            {store.place.place.map((el)=>(
                <Box>
                    <Text fontWeight={"bold"} fontSize={"24px"}>{el.name}</Text>
                    <Box marginLeft={"33%"}>
                    <Image w={"60%"} src={el.image}/>
                    </Box>
                    <Text>{el.about}</Text>
                </Box>
            ))}
        </Box>
    )
}