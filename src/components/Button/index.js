import React, { Component } from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
  name: PropTypes.string,
  func: PropTypes.func,
  type: PropTypes.string,
  classes: PropTypes.string,
  buttonClasses: PropTypes.string,
  show: PropTypes.bool,
};

export default Button;
