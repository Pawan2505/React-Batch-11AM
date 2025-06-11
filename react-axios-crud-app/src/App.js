import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [editId, setEditId] = useState(null);

  async function show(){
      let response = await axios.get("http://localhost:3000/users");

      let usersDetails = response.data;

      setUsers(usersDetails);
  }

  useEffect(()=>{
    show();
  },[])


  async function handleSubmit(e){
    e.preventDefault();

    if(editId != null){

      await axios.put(`http://localhost:3000/users/${editId}`,{username:newUser});
      setEditId(null);
      setNewUser('');
      show();


    }else{
      await axios.post("http://localhost:3000/users",{username:newUser})
      setNewUser('');
      show();
    }

  }


  async function deletData(id){
    await axios.delete(`http://localhost:3000/users/${id}`);
    show();
  }


  function editData(id){
    let updateData = users.find((u)=>u.id == id);

    setNewUser(updateData.username);
    setEditId(id);

  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Username...' value={newUser} onChange={(e)=>setNewUser(e.target.value)}/>
      <button type='submit'>Submit</button>
      </form>
      

    <table>
      {
        users.map((user)=>(
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>
              <button onClick={()=>deletData(user.id)}>Delete</button>
              <button onClick={()=>editData(user.id)}>Edit</button>
            </td>
          </tr>
        ))
      }
    </table>

    </div>
  )
}

export default App
