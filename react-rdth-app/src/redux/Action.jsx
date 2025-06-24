import axios from "axios"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"

export const getServerData = async(dispatch)=>{

    dispatch({type:FETCH_REQUEST})

    try{
        let response = await axios.get("https://dummyjson.com/products");
    //    console.log();
    // let allData = await response.data.products;
    // console.log(allData.products)
        dispatch({type:FETCH_SUCCESS, payload:response.data.products})

    }catch(err){
        console.log(err)
        dispatch({type:FETCH_FAILURE})
    }
}