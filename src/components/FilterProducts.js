import SortOptions from "./SortOptions";
import { useState } from "react";
const FilterProducts = ({ productsNum }) => {
  let [showSortOpt, setShowSortOpt] = useState(false);

  let handleSortDiv = () => {
    setShowSortOpt(!showSortOpt);
  }

  return (
    <div className="filterProducts__div">
      <p className="proudcts__num">Found {productsNum} items</p>
      <SortOptions visibility={showSortOpt}/>
      <div className="sortBy"  onClick={handleSortDiv}>Sort by</div>
      <ul className="filterUl">
        <li>Show only:</li>
        <li>Gender</li>
        <li>Color</li>
        <li>Material</li>
        <li>Season</li>
      </ul>
    </div>
  )
}

export default FilterProducts;