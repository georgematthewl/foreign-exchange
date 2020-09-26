import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.border.cardRadius};
  margin-bottom: 1rem;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 10px 20px rgba(0, 0, 0, 0.04);

  .left-container {
    width: 90%;
    padding: 0.5rem 0.75rem;

    h3,
    p {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    h3 {
      color: ${(props) => props.theme.colors.primary};
    }

    .currency-value {
      display: flex;
      justify-content: space-between;

      p {
        word-break: break-word;
      }
    }

    .currency-name {
      margin-top: 0.5rem;
      font-weight: 700;
      font-size: 12px;
      font-style: italic;
    }

    .base-rate {
      margin-top: 0.25rem;
      font-size: 13px;
    }
  }

  button {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    width: 10%;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-top-right-radius: ${({ theme }) => theme.border.cardRadius};
    border-bottom-right-radius: ${({ theme }) => theme.border.cardRadius};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkenPrimary};
      color: white;
    }
  }
`;
