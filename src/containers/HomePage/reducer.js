import {
  START_GET_CURRENCIES,
  SUCCESS_GET_CURRENCIES,
  FAIL_GET_CURRENCIES,
} from "./constants";

const initialState = {
  isLoading: false,
  listCurrencies: [],
  isError: false,
  errorMessages: "",
};

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case START_GET_CURRENCIES:
      return { ...state, isLoading: true };
    case SUCCESS_GET_CURRENCIES:
      return { ...state, listCurrencies: action.payload, isLoading: false };
    case FAIL_GET_CURRENCIES:
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessages: action.payload,
      };
    default:
      return state;
  }
}

export default homePageReducer;
