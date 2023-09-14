import Card from "./../UI/Card";
import Button from "./../UI/Button";
import classes from "./AddUsers.module.css";
import { useState } from "react";

const AdddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={usernameHandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age (Years)</label>
          <input type="number" onChange={ageHandler} value={enteredAge} />

          <Button type="submit">Add Users</Button>
        </div>
      </form>
    </Card>
  );
};

export default AdddUsers;
