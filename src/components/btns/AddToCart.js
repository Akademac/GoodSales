
import '../products.css';

import { addToCart, annulFromCart } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { isInCart } from '../../redux/reducers/addToCart';

const AddToCart = ({ keyProp }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.addToCartR);

  const handleAdding = (e) => {
    if (!isInCart(state, keyProp)) {
      dispatch(addToCart(keyProp));
    } else {
      dispatch(annulFromCart(keyProp));
    }
  }

  return (
    <button className='addToCart__btn' onClick={handleAdding} >{isInCart(state, keyProp) ? 'Annul!' : 'Add to Cart!'}</button>
    )
  }

  export default AddToCart;
