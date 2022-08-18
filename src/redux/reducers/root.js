import changeHeaderColorR from "./changeHCreducer";
import moduleShowHide from "./moduleR";
import miniNavVisibility from './showMiniNavR';
import getDataR from "./allDataFetchingR";
import sortFiltOptions from './sortFiltOptionsR';
import sortData from './sortDataR';
import getSingleProductR from './getSingleProduct';
import addToCartR from './addToCart';
import { combineReducers } from "redux";

export const reducers = combineReducers({
  changeHeaderColorR, 
  moduleShowHide, 
  miniNavVisibility,
  sortFiltOptions,
  getDataR, 
  sortData,
  getSingleProductR, 
  addToCartR, 
});