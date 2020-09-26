import React, { Component } from "react";
import { ButtonContainer } from "./style";

class Button extends Component {
  render() {
    const { name, func, type, classes, buttonClasses, show } = this.props;

    return (
      <ButtonContainer className={`${classes}`}>
        <button
          type="button"
          className={`btn btn-${type} ${buttonClasses} ${show ? "" : "hidden"}`}
          onClick={func}
        >
          {name}
        </button>
      </ButtonContainer>
    );
  }
}

export default Button;
