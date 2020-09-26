import React from "react";
import PropTypes from "prop-types";

import { CURRENCIES } from "./constants";
import { CardContainer } from "./style";

class Card extends React.Component {
  render() {
    const { currency, rate, currentValue, deleteCard } = this.props;
    return (
      <CardContainer>
        <div className="left-container">
          <div className="currency-value">
            <h3>{currency}</h3>
            <p>{(currentValue * rate).toLocaleString("id")}</p>
          </div>
          <p className="currency-name">
            {currency} - {CURRENCIES[currency]}
          </p>
          <p className="base-rate">
            1 USD = {currency} {rate.toLocaleString("id")}
          </p>
        </div>
        <button type="button" onClick={() => deleteCard(currency)}>
          X
        </button>
      </CardContainer>
    );
  }
}

Card.propTypes = {
  currency: PropTypes.string,
  rate: PropTypes.number,
  currentValue: PropTypes.number,
  deleteCard: PropTypes.func,
};

export default Card;
