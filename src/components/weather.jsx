import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux";

export const Weather=()=>{
    const store=useSelector((store)=>store.LocationData)
      console.log(store)
    
    return(
        <Box>

        </Box>
    )
}