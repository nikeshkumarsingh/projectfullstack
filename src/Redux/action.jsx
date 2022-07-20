import axios from "axios";
import * as types from "./actionTypes";

const fetchdatafailure = (payload) => {
    return {
      type: types.FETCH_DATA_FAILURE,
      payload,
    };
  };

const fetchdatarequest = (payload) => {
    return {
      type: types.FETCH_DATA_REQUEST,
      payload,
    };
};
const fetchdatasuccess = (payload) => {
    savedata(payload)
    return {
      type: types.FETCH_DATA_SUCCESS,
      payload,
    };
};
const Savelat=(payload)=>{
  return{
    type:types.SAVE_LAT,
    payload,
  }
}
const Savelong=(payload)=>{
  return{
    type:types.SAVE_LONG,
    payload,
  }
}
const Fetchdata = (payload) => {
    return (dispatch) => {
      dispatch(fetchdatarequest());
      axios
        .get(
          `https://api.unsplash.com/search/collections?client_id=Zhn8M89zijqkGq942YLJXRjw0T2NX5CVRnGIRblXdsA&page=1&query=${payload}`
        )
        .then((r) => dispatch(fetchdatasuccess(r.data.results)))
        .catch((r) => dispatch(fetchdatafailure(r.data)));
    };
  };
  export {
    Fetchdata,
    Savelat,
    Savelong
  }