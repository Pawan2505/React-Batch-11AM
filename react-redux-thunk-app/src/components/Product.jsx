import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServerData } from '../redux/Action';

const Product = () => {
    const {loading, error, data} = useSelector((state)=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getServerData)
        // getServerData(dispatch);
        // console.log(data)
    },[])
  return (
    <div>
      {
        loading ? <h1 style={{textAlign:'center'}}>Loading...</h1> :(
            <div>

            {
                data.map((item)=>(
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.price}</p>
                    </div>
                ))
            }

            </div>
        )
      }
    </div>
  )
}

export default Product;
