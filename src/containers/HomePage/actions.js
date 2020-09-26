import Axios from "axios";
import { GET_ALL_CURRENCY_API } from "utils/api";
import {
  START_GET_CURRENCIES,
  SUCCESS_GET_CURRENCIES,
  FAIL_GET_CURRENCIES,
} from "./constants";

export function startGetCurrencies() {
  return { type: START_GET_CURRENCIES };
}

export function successGetCurrencies(data) {
  return { type: SUCCESS_GET_CURRENCIES, payload: data };
}

export function failGetCurrencies(error) {
  return { type: FAIL_GET_CURRENCIES, payload: error };
}

export const getAllCurrencies = () => {
  return (dispatch) => {
    dispatch(startGetCurrencies());
    Axios.get(GET_ALL_CURRENCY_API)
      .then((response) => {
        dispatch(successGetCurrencies(response.data));
      })
      .catch(() => {
        dispatch(
          failGetCurrencies("Failed to get data. Please reload this page.")
        );
      });
  };
};
