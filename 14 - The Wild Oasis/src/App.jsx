import styled from "styled-components";

export default function App() {
  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: rebeccapurple;
  `;

  const Button = styled.button`
    border: none;
    padding: 1.2rem 2.4rem;
    background-color: orangered;
    color: white;
    font-size: 1.8rem;
    margin: 0.8rem;
    border-radius: 8px;
  `;

  const Input = styled.input`
    border-radius: 1.2rem;
    padding: 1.2rem 2.4rem;
    font-size: 1.8rem;
    &::placeholder-color {
      color: transparent;
    }
    &::-webkit-input-placeholder {
      color: transparent;
    }
  `;

  const StyledApp = styled.main`
    background-color: darkblue;
    padding: 10px;
  `;

  return (
    <StyledApp>
      <H1>Keep Going</H1>
      <Button>There we go</Button>
      <Button onClick={() => alert("Hello")}>No Pain No Gain</Button>
      <Input placeholder="Hello World" />
    </StyledApp>
  );
}
