import styled from "styled-components";

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  #blackscreen {
    background-color: ${(props) => props.theme.colors.black};
    height: 100vh;
    opacity: 0.5;
  }

  #modal-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 15;
    top: 0;
  }

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.theme.border.cardRadius};
  }

  .column {
    flex-direction: column;
  }

  #modal {
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
      0px 10px 20px rgba(0, 0, 0, 0.04);
    border-radius: ${(props) => props.theme.border.cardRadius};
    height: 30%;
    width: 40%;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }

  @media screen and (max-width: 768px) {
    #modal {
      margin-top: -100px;
      height: 20%;
      width: 80%;
    }
  }
`;
