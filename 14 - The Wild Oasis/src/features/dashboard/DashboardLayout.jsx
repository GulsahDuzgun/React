import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Dashboard 1</div>
      <div>Dashboard 2</div>
      <div>Dashboard 3</div>
      <div>Dashboard 4</div>
    </StyledDashboardLayout>
  );
}
