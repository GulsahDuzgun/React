import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
      background-color: orangered;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 24px;
      font-weight: 500;
      background-color: rebeccapurple;
    `}

    line-height:4.8rem;
`;

export default Heading;
