import Card from "./../UI/Card";
import classes from "./AddUsers.module.css";

const AdddUsers = (props) => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="username">Username</label>
          <input type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input type="text" />
        </div>

        <button>Add Users</button>
      </form>
    </Card>
  );
};

export default AdddUsers;
