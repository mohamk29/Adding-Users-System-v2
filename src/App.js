import React, { useState } from "react";
import AdddUsers from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { username: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AdddUsers onAddUser={addUserHandler} />
      <UsersList userArr={userList} />
    </div>
  );
}

export default App;
