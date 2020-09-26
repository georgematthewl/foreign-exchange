import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: inline-block;

  .hidden {
    display: none !important;
  }

  &.center {
    display: flex;
    justify-content: center;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 16px;
    border-radius: ${({ theme }) => theme.border.buttonRadius};

    &.w-full {
      width: 100%;
    }

    &.btn {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      cursor: pointer;

      &-primary {
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: white;
      }

      &-primary:disabled {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.gray};
        border: 1px solid ${({ theme }) => theme.colors.gray};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkenPrimary};
      border: 1px solid ${({ theme }) => theme.colors.darkenPrimary};
      color: white;
    }
  }
`;
