const UsersList = (props) => {
  return (
    <ul>
      {props.userArr.map((user) => {
        return <li>{`${user.name} (${user.age} years old)`}</li>;
      })}
    </ul>
  );
};

export default UsersList;
