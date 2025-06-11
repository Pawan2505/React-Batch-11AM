import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Users Details</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
