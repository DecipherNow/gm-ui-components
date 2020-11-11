import styled, { css } from "styled-components";

export const Body = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${props =>
    props.isBlock &&
    css`
      align-items: center;
      text-align: center;
    `}
`;
