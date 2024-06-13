import { useCabins } from "../features/cabins/useCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  const { cabins } = useCabins();
  console.log(cabins);
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
    </Row>
  );
}

export default Dashboard;
