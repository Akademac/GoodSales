import DisplayProducts from "./DisplayProducts";
import FilterProducts from "./FilterProducts";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../redux/actions/index";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
  let dispatch = useDispatch();
  const [mans, setMans] = useState([]);
  const [women, setWomen] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [preTxt, setPreTxt] = useState('');
  let products = useSelector(x => x.getDataR);

  useEffect(() => {
    // only one call, starting fetching
    dispatch(getData());
  }, [])

  useEffect(() => {
    // put data in useState hooks
    if(products.data && products.data.goodSales) {
      setMans(products.data.goodSales[0].mans);
      setWomen(products.data.goodSales[1].women);
      setAllProducts([...products.data.goodSales[0].mans, ...products.data.goodSales[1].women]);
    }
  }, [products])

  let jsxElement;

    if(products && !products.fetching) {
      jsxElement = <DisplayProducts allProducts={allProducts}/>
    }
    else {
      jsxElement = <div className="skeleton__div">
        <Skeleton className='skeleton' />
        <Skeleton className='skeleton' />
        <Skeleton className='skeleton' />
        <Skeleton className='skeleton' />
      </div> 
    }

  return (
    <div className="products__div">
      <FilterProducts productsNum={allProducts.length === 0 ? '...' : allProducts.length}/>
      {jsxElement}
    </div>
  );
};

export default Products;
