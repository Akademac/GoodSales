import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
const CartBtn = () => {
  const state = useSelector(state => state.addToCartR);
  return (
    <span className="cart_btn">
      <Link to='/GoodSales/cart'>
      <i className="fa fa-shopping-cart" style={{ marginRight: ".4rem" }}></i>
      Cart({state.length})
      </Link>
    </span>
  );
};

export default CartBtn;
