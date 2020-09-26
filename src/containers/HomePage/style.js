import styled from "styled-components";

export const HomePageContainer = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;

    input {
      width: 30%;
      border-radius: 0;
      border: none;
      padding: 0.5rem;
      border: 1px solid ${(props) => props.theme.colors.primary};

      &:focus {
        border-radius: 0;
      }
    }

    .left {
      p {
        margin-top: 0;
        margin-bottom: 0.25rem;
      }

      h2 {
        margin-block-start: 0;
        margin-block-end: 0;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .list-card {
    padding: 1rem;

    span {
      color: red;
      text-align: center;
    }
  }

  .add-btn {
    display: flex;
    padding: 0 1rem;
    justify-content: center;
    flex-direction: column;
  }
`;
