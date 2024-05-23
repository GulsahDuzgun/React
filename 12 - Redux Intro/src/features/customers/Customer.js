import { useSelector } from "react-redux";

function Customer() {
  const userName = useSelector((store) => store.cutomerState.fullName);
  return <h2>👋 Welcome, {userName}</h2>;
}

export default Customer;
