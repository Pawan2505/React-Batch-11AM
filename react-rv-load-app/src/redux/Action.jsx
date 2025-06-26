import axios from "axios"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"


export const getServerData = async(dispatch)=>{
    dispatch({type:FETCH_REQUEST})

    try{
      let response = await axios.get("https://dummyjson.com/products");

      let allRecord = response.data.products;

      dispatch({type:FETCH_SUCCESS, payload:allRecord})

    }catch(err){
        console.log(err);
        dispatch({type:FETCH_FAILURE})
    }
}


