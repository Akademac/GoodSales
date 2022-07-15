import changeHeaderColorR from "./changeHCreducer";
import moduleShowHide from "./moduleR";
import miniNavVisibility from './showMiniNavR';
import getDataR from "./allDataFetchingR";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  changeHeaderColorR, 
  moduleShowHide, 
  miniNavVisibility,
  getDataR
});