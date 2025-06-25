import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
const CrudApp = () => {

    const [users, setUsers] = useState([]);

  const allData = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    let newArray = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let obj = {...doc.data(), ["id"]:doc.id}
      newArray.push(obj);
    });
    setUsers(newArray)
  };

  useEffect(()=>{
    allData();
  },[])

  return(
    <div>

    <table  className="table table-borderd table-striped table-hover mt-5 w-50 m-auto">
        <thead className="table-dark">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button>Delete</button>
                            <button>Edit</button>
                        </td>
                        
                    </tr>
                ))
            }
        </tbody>
    </table>

    </div>
  )
};

export default CrudApp;
