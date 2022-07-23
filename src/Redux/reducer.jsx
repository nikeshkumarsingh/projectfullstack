import * as types from "./actionTypes";

const initState={
    lat:null,
    long:null,
    loading:false,
    addressdetail:"",
    weather:"",
    nav:false,
    place:"",
    state_list:"",
}

const handleReducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:true,
            }
        case types.FETCH_DATA_SUCCESS:
            return{
                ...state,
                addressdetail:payload,
                error:"",
                loading:false,
                
            }
        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false,
            
            }
        case types.SAVE_LAT:
            return{
                ...state,
                error:"",
                loading:false,
                lat:payload,
            }
        case types.SAVE_LONG:
            return{
                ...state,
                error:"",
                loading:false,
                long:payload,
            }
        case types.FETCH_WEATHER_SUCCESS:
            return{
                ...state,
                error:"",
                loading:false,
                weather:payload,
            }
        case types.SET_NAV:
            return{
                ...state,
                error:"",
                nav:true,
            }
        case types.FETCH_PLACE:
            return{
                ...state,
                error:"",
                loading:false,
                place:payload,
            }
        case types.FETCH_STATE_LIST:
            return{
                ...state,
                error:"",
                loading:false,
                state_list:payload,
            }
        default:
            return state;
    }
}
export default handleReducer