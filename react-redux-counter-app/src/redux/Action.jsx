import { type } from "@testing-library/user-event/dist/type";


export const increment = ()=>{
    return{
        type:"INCREMENT"
    }
}


export const decrease = ()=>{
    return{
        type:"DECREMENT"
    }
}
