import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function App() {
  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: rebeccapurple;
  `;

  const StyledApp = styled.main`
    background-color: darkblue;
    padding: 10px;
  `;

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <H1>Keep Going</H1>
        <Button>There we go</Button>
        <Button onClick={() => alert("Hello")}>No Pain No Gain</Button>
        <Input placeholder="Hello World" />
      </StyledApp>
    </>
  );
}
