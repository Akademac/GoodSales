import { useParams, Link } from "react-router-dom";
import { getSingleProduct } from "../redux/actions/index";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./products.css";
import AddToCart from "./btns/AddToCart";
import MiniNav from "./MiniNav";
const SingleProduct = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let [singleProduct, setSingleProduct] = useState([]);
  let product = useSelector((x) => x.getSingleProductR);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  useEffect(() => {
  window.scrollTo(0, 0);
    // put data in useState hooks
    if (product && product.data) {
      setSingleProduct(product.data);
    }
  }, [product]);

  let jsxElementFirst;
 
  if (!product.fetching) {
    if (singleProduct) {
      jsxElementFirst = singleProduct.map((e, index) => {
        return (
          <div className="singleProductDiv" key={index}>
            <div className="singleProductLeft__div">
              <img src={e.img} alt={e.description}  />
            </div>
            <div className="singleProductRight__div">
                <h3>{e.description}</h3>
                <p>
                  Material: <b>{e.material}</b>
                </p>
                <p>
                  Season: <b>{e.season}</b>
                </p>
                <span className="price__span">
                  <b className="price">{e.price}$</b>
                </span>
                <div className="singleProduct__btns">
                  <AddToCart keyProp={e.key}/>
                  <button><Link to='/GoodSales'>Shopping more</Link></button>
                </div>
              </div>
          </div>
        )
      });
    }
  } else {
    jsxElementFirst = (
      <div className="singleProductSkeleton__div">
        <Skeleton className="singleProductSkeleton__left" />
        <Skeleton className="singleProductSkeleton__right" count={10} />
      </div>
    )
  }

  return (
    <div className="singleProduct__wrapper">
      <MiniNav />  
      {jsxElementFirst}
    </div>
  )

  
};

export default SingleProduct;
