import { keyframes } from "styled-components";

export const spinGradient = keyframes`
  0% {
    background-position: -100% -100%;
    transform: rotate(0)
  }
  100% {
    background-position: 100% 100%;
    transform: rotate(360deg)
  }
`;

export default spinGradient;
