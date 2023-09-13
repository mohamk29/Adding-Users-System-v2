import Card from "./../UI/Card";
import Button from "./../UI/Button";
import classes from "./AddUsers.module.css";
import { useState } from "react";

const AdddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="username">Username</label>
          <input type="text" onChange={usernameHandler} />

          <label htmlFor="age">Age (Years)</label>
          <input type="text" onChange={ageHandler} />

          <Button type="submit">Add Users</Button>
        </div>
      </form>
    </Card>
  );
};

export default AdddUsers;
