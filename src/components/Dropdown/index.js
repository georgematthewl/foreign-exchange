import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import { LIST_CURRENCIES } from "./constants";

import { DropdownContainer } from "./style";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCurrencies: "CAD",
    };
  }

  handleChange = (ev) => {
    const { value } = ev.target;
    this.setState({ selectedCurrencies: value });
  };

  render() {
    const { show, onChange } = this.props;
    const { selectedCurrencies } = this.state;

    return (
      <DropdownContainer className={`${show ? "" : "hidden"}`}>
        <select className="selector" onChange={this.handleChange}>
          {LIST_CURRENCIES.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
        <Button
          buttonClasses="submit"
          name="Submit"
          type="primary"
          show={show}
          func={() => onChange(selectedCurrencies)}
        />
      </DropdownContainer>
    );
  }
}

Dropdown.propTypes = {
  show: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Dropdown;
