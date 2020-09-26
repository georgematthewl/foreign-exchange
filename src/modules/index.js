/* eslint-disable */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import HomePageReducer from "containers/HomePage/reducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    homePage: HomePageReducer,
  });
