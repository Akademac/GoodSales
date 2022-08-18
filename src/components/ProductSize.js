import { markSize, demarkSize, choosenSize } from '../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { useState } from 'react';

const ProductSize = ({ valueProp, checkedProp, active, keyProp }) => {
  const dispatch = useDispatch();
  /*
  const state = useSelector(state => state.markSizeR)
  let [checkedColor, setCheckedColor] = useState();
  let [checked, setChecked] = useState(false);
  const handleSizeColor = () => {
    if (!checked) {
      setCheckedColor('rgba(236, 105, 189, 1)');
      setChecked(!checked)
    }
    // dispatch(markSize({size: valueProp, checked: true}))
  }
  */

  return (
    <span onClick={() => { dispatch(choosenSize(keyProp, valueProp)) }} className={active ? 'sizes active' : 'sizes'}>{valueProp}</span>
  )
}

export default ProductSize;

/*
<span onClick={handleSizeColor} style={{color: checkedColor, border: `1px solid ${checkedColor}`}} className={active ? 'sizes active' : 'sizes'}>{valueProp}</span>
*/