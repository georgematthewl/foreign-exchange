import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  &.hidden {
    display: none;
  }

  select {
    cursor: pointer;
    width: 100%;
    margin-right: 0.25rem;
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
