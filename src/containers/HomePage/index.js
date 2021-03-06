import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/Button";
import Card from "components/Card";
import Dropdown from "components/Dropdown";
import Loading from "components/Loading";

import { getAllCurrencies } from "./actions";
import { HomePageContainer } from "./style";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: 10,
      selectedCurrencies: ["IDR"],
      isAddButtonShowed: true,
      errorMessages: "",
    };
  }

  componentDidMount = () => {
    const { getCurrencies } = this.props;
    getCurrencies();
  };

  updateInputValue = (event) => {
    const { value } = event.target;

    if (value <= 0 && value !== "") this.setState({ currentValue: 10 });
    else this.setState({ currentValue: value });
  };

  copyArray = () => {
    const { selectedCurrencies } = this.state;
    const newArray = [...selectedCurrencies];

    return newArray;
  };

  handleDeleteCard = (card) => {
    const updatedArr = this.copyArray();

    updatedArr.splice(updatedArr.indexOf(card), 1);
    this.setState({ selectedCurrencies: updatedArr });
  };

  toggleAddButton = () => {
    const { isAddButtonShowed } = this.state;

    this.setState({ isAddButtonShowed: !isAddButtonShowed });
  };

  handleOptionChange = (currency) => {
    const { isAddButtonShowed } = this.state;
    const updatedArr = this.copyArray();

    if (updatedArr.indexOf(currency) === -1) {
      updatedArr.push(currency);
      this.setState({
        selectedCurrencies: updatedArr,
        isAddButtonShowed: !isAddButtonShowed,
        errorMessages: "",
      });
    } else {
      this.setState({
        errorMessages: "Currency already exists, please try another one.",
      });
    }
  };

  render() {
    const {
      currentValue,
      selectedCurrencies,
      isAddButtonShowed,
      errorMessages,
    } = this.state;
    const { listCurrencies, isLoading } = this.props;

    return (
      <HomePageContainer>
        {isLoading && <Loading text="Fetching data..." />}
        <section className="header">
          <div className="left">
            <p>USD - United States Dollar</p>
            <h2 className="main-currency">USD</h2>
          </div>
          <input
            type="number"
            onChange={this.updateInputValue}
            value={currentValue.toLocaleString("id")}
          />
        </section>
        <section className="list-card">
          {errorMessages !== "" && <span>{errorMessages}</span>}
          {listCurrencies.rates &&
            selectedCurrencies.length !== 0 &&
            selectedCurrencies.map((currency) => {
              return (
                <Card
                  key={currency}
                  currency={currency}
                  rate={listCurrencies.rates[currency]}
                  currentValue={currentValue}
                  deleteCard={this.handleDeleteCard}
                />
              );
            })}
          {selectedCurrencies.length === 0 && (
            <h3>Currently you haven&apos;t selected any currency.</h3>
          )}
        </section>
        <section className="add-btn">
          <Dropdown
            onChange={this.handleOptionChange}
            show={!isAddButtonShowed}
          />
          <Button
            show={isAddButtonShowed}
            type="primary"
            name="+ Add More Currencies"
            buttonClasses="w-full add"
            func={this.toggleAddButton}
          />
        </section>
      </HomePageContainer>
    );
  }
}

HomePage.propTypes = {
  listCurrencies: PropTypes.any,
  isLoading: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    listCurrencies: state.homePage.listCurrencies,
    isLoading: state.homePage.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrencies: () => dispatch(getAllCurrencies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
