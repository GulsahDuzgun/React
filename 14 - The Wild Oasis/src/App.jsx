import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

export default function App() {
  const StyledApp = styled.main`
    padding: 10px;
  `;

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Heading as="h1">Keep Going</Heading>
        <Heading as="h2">Forward</Heading>
        <Button>There we go</Button>
        <Button onClick={() => alert("Hello")}>No Pain No Gain</Button>
        <Input placeholder="Hello World" />
      </StyledApp>
    </>
  );
}
