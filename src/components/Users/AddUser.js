import Card from "./../UI/Card";
import Button from "./../UI/Button";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const AdddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age >0)",
      });
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </>
  );
};

export default AdddUsers;
