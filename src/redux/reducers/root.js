import changeHeaderColorR from "./changeHCreducer";
import moduleShowHide from "./moduleR";
import miniNavVisibility from './showMiniNavR'
import { combineReducers } from "redux";

export const reducers = combineReducers({
  changeHeaderColorR, 
  moduleShowHide, 
  miniNavVisibility
});