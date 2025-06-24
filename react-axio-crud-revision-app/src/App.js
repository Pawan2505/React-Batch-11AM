import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [details, setDetails] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [editId, setEditId] = useState(null);

  async function show() {
    let response = await axios.get("http://localhost:3000/users");
    // console.log(response.data);
    let allRecord = response.data;
    setDetails(allRecord);
  }

  useEffect(() => {
    show();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId != null) {
      await axios.put(`http://localhost:3000/users/${editId}`,{username:newUser})
      setNewUser('')
      setEditId(null)
      show();
    } else {
      await axios.post("http://localhost:3000/users", { username: newUser });
      setNewUser('')
    }

    show();
  };

  const deleteData = async(id) => {

      await axios.delete(`http://localhost:3000/users/${id}`)
      show();

  };

  const editData = (id) => {
   let update = details.find((u)=>u.id == id)
   setNewUser(update.username);
   setEditId(id);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-2 p-5 mt-5 w-50 mb-4 m-auto"
      >
        <input
          className="form-control w-100"
          type="text"
          placeholder="Enter username..."
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button className="btn btn-primary mt-3 w-100" type="submit">
          Save
        </button>
      </form>

      <table className="table table-striped w-50 m-auto">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Username </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {details.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>
                  <button onClick={() => deleteData(user.id)}>Delete</button>
                  <button onClick={() => editData(user.id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
