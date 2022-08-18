import { showMiniNav } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const BurgerMenuBtn = () => {
  let state = useSelector(state => state.miniNavVisibility);
  let dispatch = useDispatch();
  let handleMiniNav = () => {
    dispatch(showMiniNav(!state))
  }
  return (
    <span className="burger__menu" onClick={handleMiniNav}>
      <i className="fa fa-bars"></i>
    </span>
  )
}


export default BurgerMenuBtn;