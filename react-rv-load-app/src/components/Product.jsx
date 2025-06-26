import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServerData } from '../redux/Action';

const Product = () => {

    let {loading, error, data} = useSelector((state)=>state);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getServerData);
        // getServerData();
        // getServerData(dispatch)
    },[])
  return loading ? <h1 style={{textAlign:'center'}}>Loading...</h1> 
  
  :
  (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    
    </div>
  )
}

export default Product
