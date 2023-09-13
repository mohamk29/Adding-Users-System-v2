import Card from "./../UI/Card";

const AdddUsers = (props) => {
  return (
    <>
      <Card>
        <label>Username</label>
        <input type="string" />
        <label>Age (Years)</label>
        <input type="number" />
        <button>Add Users</button>
      </Card>
    </>
  );
};

export default AdddUsers;
