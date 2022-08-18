import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSortFiltOptions } from '../redux/actions/index';
import { sortData } from '../redux/actions/index';
const SortFiltOptions = () => {
  const [sortOpt, setSortOpt] = useState('');
  const dispatch = useDispatch();
  const stateVisibility = useSelector(state => state.sortFiltOptions);
  const handleOwnVisibility = () => {
    dispatch(showSortFiltOptions({ visibility: false, sortFilt: '' }))
  }

  const chooseOpt = (el) => {
    if (el) {
      setSortOpt(el);
    }
  }

  const aplyChanges = () => {
    dispatch(sortData(sortOpt));
    handleOwnVisibility();
  }

  let jsxElement;

  if (stateVisibility.sortFilt === 'sort') {
    jsxElement = (
      <div className="sortDivPriPop">
        <label className="container" htmlFor="pricerising">Price rising
          <input type="radio" name="radio" id='pricerising' onClick={() => chooseOpt('pricerising')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="pricefalling">Price falling
          <input type="radio" name="radio" id='pricefalling' onClick={() => chooseOpt('pricefalling')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="populrising">Least popular
          <input type="radio" name="radio" id='populrising' onClick={() => chooseOpt('populrising')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="populfalling">Most popular
          <input type="radio" name="radio" id='populfalling' onClick={() => chooseOpt('populfalling')} />
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }
  else if(stateVisibility.sortFilt === 'gender') {
    jsxElement = (
      <div className="sortDivPriPop">
        <label className="container" htmlFor="gendermale">Male
          <input type="radio" name="radio" id='gendermale' onClick={() => chooseOpt('gendermale')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="genderfemale">Female
          <input type="radio" name="radio" id='genderfemale' onClick={() => chooseOpt('genderfemale')} />
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }
  else if(stateVisibility.sortFilt === 'color') {
    jsxElement = (
      <div className="sortDivPriPop">
        <label className="container" htmlFor="colorblack">Black
          <input type="radio" name="radio" id='colorblack' onClick={() => chooseOpt('colorblack')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="colorwhite">White
          <input type="radio" name="radio" id='colorwhite' onClick={() => chooseOpt('colorwhite')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="colorother">Other
          <input type="radio" name="radio" id='colorother' onClick={() => chooseOpt('colorother')} />
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }
  else if(stateVisibility.sortFilt === 'material') {
    jsxElement = (
      <div className="sortDivPriPop">
        <label className="container" htmlFor="materialcoton">Coton
          <input type="radio" name="radio" id='materialcoton' onClick={() => chooseOpt('materialcoton')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="materialtexas">Texas
          <input type="radio" name="radio" id='materialtexas' onClick={() => chooseOpt('materialtexas')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="materialpoliester">Poliester
          <input type="radio" name="radio" id='materialpoliester' onClick={() => chooseOpt('materialpoliester')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="materialother">Other
          <input type="radio" name="radio" id='materialother' onClick={() => chooseOpt('materialother')} />
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }
  else if(stateVisibility.sortFilt === 'season') {
    jsxElement = (
      <div className="sortDivPriPop">
        <label className="container" htmlFor="seasonwinter">Winter
          <input type="radio" name="radio" id='seasonwinter' onClick={() => chooseOpt('seasonwinter')} />
          <span className="checkmark"></span>
        </label>
        <label className="container" htmlFor="seasonsummer">Summer
          <input type="radio" name="radio" id='seasonsummer' onClick={() => chooseOpt('seasonsummer')} />
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }
  return (
    <div className={!stateVisibility.visibility ? "sortFiltOptions" : "sortFiltOptions sortFiltOptions_show"}>
      {jsxElement}
      <button className="sortFiltAplyBtn" onClick={aplyChanges}>Aply</button>
      <button className="sortFiltCancelBtn" onClick={handleOwnVisibility}>Cancel</button>
    </div>
  )
}


export default SortFiltOptions;