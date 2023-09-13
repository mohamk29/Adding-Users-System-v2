import React, { useState } from "react";
import AdddUsers from "./components/Users/AddUser";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {};
  return (
    <div>
      <AdddUsers onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
