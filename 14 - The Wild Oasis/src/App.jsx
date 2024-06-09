import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

export default function App() {
  const StyledApp = styled.main`
    padding: 10px;
  `;

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">Keep Going</Heading>
          <Heading as="h2">Forward</Heading>
        </Row>
        <Row>
          <Button>There we go</Button>
          <Button variation="danger" size="large">
            No Pain No Gain
          </Button>
          <Button variation="secondary" size="medium">
            Move on{" "}
          </Button>
          <Input placeholder="Hello World" />
        </Row>
      </StyledApp>
    </>
  );
}
