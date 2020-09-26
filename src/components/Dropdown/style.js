import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  &.hidden {
    display: none;
  }

  select {
    width: 100%;
    margin-right: 0.25rem;
  }
`;
