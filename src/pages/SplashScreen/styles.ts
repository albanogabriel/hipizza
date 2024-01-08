import styled from "styled-components";

export const SplashContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    padding-bottom: 2.5rem ;
    bottom: 0;
    color: ${props => props.theme["gray-900"]};
  }
`
