import SortFiltOptions from "./SortFiltOptions";
import { showSortFiltOptions } from '../redux/actions/index';
import { useDispatch } from "react-redux/es/exports";
import Banner from "./Banner";
const FilterProducts = ({ productsNum }) => {
  let dispatch = useDispatch();
  let handleSFOVisibility = (e) => {
    if (e === 'sort') {
      dispatch(showSortFiltOptions({ visibility: true, sortFilt: 'sort' }))
    }
    else if (e === 'gender') {
      dispatch(showSortFiltOptions({ visibility: true, sortFilt: 'gender' }))
    }
    else if (e === 'color') {
      dispatch(showSortFiltOptions({ visibility: true, sortFilt: 'color' }))
    }
    else if (e === 'material') {
      dispatch(showSortFiltOptions({ visibility: true, sortFilt: 'material' }))
    }
    else if (e === 'season') {
      dispatch(showSortFiltOptions({ visibility: true, sortFilt: 'season' }))
    }
  }


  return (
    <div className="filterProducts__div">
      <p className="proudcts__num">Found {productsNum} items</p>
      <SortFiltOptions />
      <div className="sortBy" onClick={() => handleSFOVisibility('sort')}>- Sort by</div>
      <ul className="filterUl">
        <li>Show only:</li>
        <li onClick={() => handleSFOVisibility('gender')}>- Gender</li>
        <li onClick={() => handleSFOVisibility('color')}>- Color</li>
        <li onClick={() => handleSFOVisibility('material')}>- Material</li>
        <li onClick={() => handleSFOVisibility('season')}>- Season</li>
      </ul>
    </div>
  )
}

export default FilterProducts;