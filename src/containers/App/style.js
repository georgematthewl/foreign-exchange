import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Lato, Sans-serif;
  max-width: 486px;
  margin: auto;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.primary};
  min-height: 100vh;
`;
