import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSelector,useDispatch } from "react-redux";
import { Fetchplace, Setnav } from "../Redux/action";
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
 const store=useSelector((store)=>store.LocationData.addressdetail)
  //const mainstore=useSelector((store)=>store.LocationData)
  const dispatch=useDispatch();
   if(store!=""){
    dispatch(Setnav())
   }
   const mainstore=useSelector((store)=>store.LocationData.state_list._id)
   if(mainstore!=undefined){
   console.log(mainstore)
     dispatch(Fetchplace(mainstore));
      
   }
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} marginBottom={"15px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>{store.features[0].properties.formatted}</Box>
          <Text fontWeight={"bold"}>Did you know you'r state {store.features[0].properties.state}</Text>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
