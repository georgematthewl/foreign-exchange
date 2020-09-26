import React from "react";
import PropTypes from "prop-types";
import { LoadingContainer } from "./style";

class Loading extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <LoadingContainer>
        <div id="blackscreen" />
        <div id="modal-container" className="loading-container">
          <div id="modal" className="loading-container column">
            <div className="lds-ellipsis">
              <div />
              <div />
              <div />
              <div />
            </div>
            <span>{text}</span>
          </div>
        </div>
      </LoadingContainer>
    );
  }
}
Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
