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
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
const Setnav = (payload) => {
  return {
    type: types.SET_NAV,
    payload,
  };
};
const Savelat = (payload) => {
  return {
    type: types.SAVE_LAT,
    payload,
  };
};
const Savelong = (payload) => {
  return {
    type: types.SAVE_LONG,
    payload,
  };
};
const fetchweathersuccess = (payload) => {
  return {
    type: types.FETCH_WEATHER_SUCCESS,
    payload,
  };
};
const fetchstatelist=(payload)=>{
  return {
    type:types.FETCH_STATE_LIST,
    payload,
  }
}
const fetchplacelist=(payload)=>{
  return {
    type:types.FETCH_PLACE,
    payload,
  }
}
const Fetchdata = (lat, long) => {
  return (dispatch) => {
    dispatch(fetchdatarequest());
    axios
      .get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=685f04bd1e7443348d845bf57afff5fc`
      )
      .then((r) => dispatch(fetchdatasuccess(r.data)))
      .catch((r) => dispatch(fetchdatafailure(r.data)));
  };
};

const FetchWather = (lat, long) => {
  return (dispatch) => {
    dispatch(fetchdatarequest());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=dba1c3d91cd51f4cc22b2539ff8573a9&units=metric`
      )
      .then((r) => dispatch(fetchweathersuccess(r.data)))
      .catch((r) => dispatch(fetchdatafailure(r.data)));
  };
};

const Fetchstatelist=(payload)=>{
  return (dispatch)=>{
    dispatch(fetchdatarequest());
    axios.get(`http://localhost:5000/state/${payload}`).then((r) => dispatch(fetchstatelist(r.data)))
    .catch((r) => dispatch(fetchdatafailure(r.data)));
  }
}
const Fetchplace=(payload)=>{
  return (dispatch)=>{
    dispatch(fetchdatarequest());
    axios.get(`http://localhost:5000/place/${payload}`).then((r)=>dispatch(fetchplacelist(r.data))).catch((r) => dispatch(fetchdatafailure(r.data)));
  }
}
export { Fetchdata, Savelat, Savelong, Setnav, FetchWather,Fetchstatelist,Fetchplace };
