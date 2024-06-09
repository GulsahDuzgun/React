import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: var(---color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  background-color: #eee;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

export default function AppLayout() {
  return (
    <StyledLayout>
      <Sidebar />
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledLayout>
  );
}
