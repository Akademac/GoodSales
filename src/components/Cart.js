import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getData } from "../redux/actions/index";
import { annulFromCart, removeFromCart } from "../redux/actions/index";
import ProductSize from "./ProductSize";
import { useEffect, useState } from "react";
import "./cart.css";
import ProductQty from "./ProductQty";

const Cart = () => {
  const productNum = useSelector((state) => state.addToCartR); 
  let [pickedData, setPickedData] = useState([]);
  let [total, setTotal] = useState(5);

  let products = useSelector((x) => x.getDataR);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("regular"));
  }, []);

  useEffect(() => {
    if (products && products.data) {
      setPickedData(products.data);
    }
  }, [products]);

  let arr = []; // ovo si hteo da bude cart sa quantity

  if (products && !products.fetching) {
    if (pickedData.length !== 0) {
      productNum.forEach((cartItem) => {
        let justPickedArrayWithOnlyOneItem = pickedData.filter((x) => x.key === cartItem.key);
        let justPicked = justPickedArrayWithOnlyOneItem[0];
        console.log('justPicked', justPicked);
        arr.push({ ...justPicked, ...cartItem }); // zbir dva objekta, jedan je productitem a drugi je cartItem
      });
    }
  }

  // const arr = productNum; // sada koristimo cart u kojem su objekti koji vec imaju kolicine...

  let jsxElement;
  let arrTotalPrices = [];

  let sizesArr = ['xs', 's', 'm', 'l', 'xl'];

  if (Array.isArray(arr) && arr.length !== 0) {
    jsxElement = arr.map((e, index) => {
      let imgs = "/GoodSales" + e.img.substring(2);
      let totalPerItem = parseInt(e.price) * parseInt(e.quantity);
      let totalPrices = totalPerItem;
      arrTotalPrices.push(totalPrices);
      return (
        <div key={index} className="cart__card">
          <div className="cartImg__div">
            <img src={imgs} alt={e.description} />
          </div>
          <div className="productDetails__div">
            <h4>{e.description.slice(0, 40)}...</h4>
            <hr />
            <h4>color: {e.color}</h4>
            <h4>material: {e.material}</h4>
            <div className="sizes_div">
              {
                sizesArr.map((size, index) => {
                  return <ProductSize key={index} valueProp={size} active={e.choosenSize === size} keyProp={e.key} />
                })
              }
            </div>
          </div>
          <div className="quantity__div">
            <p>Quantity</p>
            <div className="quantityBtns__div">
              <button onClick={() => { dispatch(removeFromCart(e.key)) }}>-</button>

              <ProductQty propsNum={e.quantity} />

              <button data-id={e.key} onClick={() => { dispatch(addToCart(e.key)); }} >+</button>
            </div>
          </div>
          <div className="priceCart__div">
            <p>Price</p>
            <h2>{e.price}.00$</h2>
          </div>
          <div className="totalCart__div">
            <p>Total</p>
            <h2>{totalPerItem}.00$</h2>
          </div>
          <div className="cartDel__btn">
            <p>Delete item</p>
            <i
              className="fa fa-regular fa-trash"
              onClick={() => handleDelete(e.key)}
            ></i>
          </div>
        </div>
      );
    });
  } else {
    jsxElement = (
      <div className="emptyCart__div">
        <h3>Your cart is empty!</h3>
        <button>
          <Link to="/GoodSales/products">Back to shopping!</Link>
        </button>
      </div>
    );
  }

  let totalprices = arrTotalPrices.reduce((a, b) => parseInt(a) + parseInt(b), 0)


  const handleDelete = (el) => {
    dispatch(annulFromCart(el));
  };

  return (
    <div className="cart__div">
      <div>
        <div className="card__headings">
          <h3>Products : {arr.length} items.</h3>
          <hr />
        </div>
        {jsxElement}
        <hr className="cartBootom__hr" />
      </div>
      <div className="order__sum">
        <div className="orderSum__headings">
          <h3>Order Summary</h3>
          <hr />
        </div>
        <div className="orderSum__div">
          <h4>Items {arr.length}</h4>
          <h2>{totalprices}$</h2>
        </div>
        <div className="shipping__div">
          <h4>SHIPPING</h4>
          <form>
            <select name="shipping" className="shipping__opts" onChange={e => setTotal(e.target.value)}>
              <option value={5}>regular shipping 5$</option>
              <option value={50}>special shipping 50$</option>
            </select>
          </form>
        </div>
        <div className="promo__div">
          <h4>PROMO CODE</h4>
          <form>
            <input type="text" placeholder="enter your code" />
            <button type="submit">Apply</button>
          </form>
          <hr />
        </div>
        <div className="totalCost__div">
          <h2>Total Cost</h2>
          <h1>{parseInt(total) + totalprices}$</h1>
        </div>
        <div className="checkOut__btn">CHECKOUT</div>
      </div>
    </div>
  );
};

export default Cart;
