import { type } from "@testing-library/user-event/dist/type"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"
import axios from "axios";


export const getServerData = async(dispatch)=>{

    dispatch({type:FETCH_REQUEST});
    //loading -> true

    try{

    const response = await axios.get('http://localhost:3000/products');
    dispatch({type:FETCH_SUCCESS, payload:response.data});

        // loading -> false
    }catch(err){
        console.log(err);
        dispatch({type:FETCH_FAILURE});
    }

}