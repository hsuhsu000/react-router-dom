const User = ({ userID }) => {
  let userName;
  switch (userID) {
    case 1:
      userName = "Maung Maung";
      break;
    case 2:
      userName = "Zaw Zaw";
      break;
    case 3:
      userName = "Su Su";
      break;
    case 4:
      userName = "Kyaw Kyaw";
      break;
    case 5:
      userName = "Aye Aye";
      break;
    default:
      userName = "unknown user";
      break;
  }
  return <p>Posted by {userName}</p>;
};

export default User;
