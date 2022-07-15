import { Link } from 'react-router-dom'
const CartBtn = () => {
  return (
    <span className="cart_btn">
      <Link to='/GoodSales/cart'>
      <i className="fa fa-shopping-cart" style={{ marginRight: ".4rem" }}></i>
      Cart(0)
      </Link>
    </span>
  );
};

export default CartBtn;
