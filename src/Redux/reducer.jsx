import * as types from "./actionTypes";

const initState={
    lat:null,
    long:null,
    loading:false,
    state:"",
    address:"",
    weather:"",
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
                pictures:payload,
                error:"",
                loading:false,

            }
        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false,

            }
        default:
            return state;
    }
}
export default handleReducer