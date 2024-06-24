import styled from "styled-components";
import { useRecentBookings } from "../bookings/useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "../bookings/useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { allBookings, loadingAllBookings } = useRecentBookings();
  const { confirmedStays, allStays, loadingAllStays } = useRecentStays();

  if (loadingAllBookings || loadingAllStays) return <Spinner />;
  console.log(allBookings);
  console.log(allStays);
  console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <div>Dashboard 1</div>
      <div>Dashboard 2</div>
      <div>Dashboard 3</div>
      <div>Dashboard 4</div>
    </StyledDashboardLayout>
  );
}
