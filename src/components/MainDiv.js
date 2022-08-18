import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeHeaderColor } from '../redux/actions';
const MainDiv = () => {
  let dispatch = useDispatch();
  let [changeMainDivs, setChangeMainDivs] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChangeMainDivs(!changeMainDivs);
      dispatch(changeHeaderColor(!changeMainDivs))
    }, 5000)
  }, [changeMainDivs]);
  return (
    <div className="main__wrapper">
      <div className="div__forHer main_divs" style={!changeMainDivs ? {left: "-100%"} : {left: "0%"} }>
      <div className="mainDiv__txt">
          <h1>MAJOR SALES!</h1>
          <h2>Various Products!</h2>
          <h3>One place...</h3>
        </div>
        <p>for her and...</p>
      </div>
      <div className="div__forHim main_divs" style={!changeMainDivs ? {left: "0%"} : {left: "100%"} }>
      <div className="mainDiv__txt">
          <h1>MAJOR SALES!</h1>
          <h2>Various Products!</h2>
          <h3>One place...</h3>
        </div>
        <p>for him...</p>
      </div>
    </div>
  )
}

export default MainDiv;