import DisplayProducts from "./DisplayProducts";
import FilterProducts from "./FilterProducts";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../redux/actions/index";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MiniNav from "./MiniNav";

const Products = () => {
  let dispatch = useDispatch();
  let [allProducts, setAllProducts] = useState([]);
  let products = useSelector(x => x.getDataR);
  let sortedData = useSelector(x => x.sortData.sort);
  useEffect(() => {
    // only one call, starting fetching
    dispatch(getData('regular'));
  }, [])

  useEffect(() => {
    // put data in useState hooks
    if (products && products.data) {
      setAllProducts(products.data);
    }
  }, [products])

  let jsxElement = '';

  if (products && !products.fetching) {
    if (sortedData === 'pricerising') {
      allProducts.sort((a, b) => a.price - b.price);
    }
    else if (sortedData === 'pricefalling') {
      allProducts.sort((a, b) => b.price - a.price);
    }
    else if (sortedData === 'populrising') {
      allProducts.sort((a, b) => a.popul - b.popul);
    }
    else if (sortedData === 'populfalling') {
      allProducts.sort((a, b) => b.popul - a.popul);
    }
    else if (sortedData === 'gendermale') {
      let x = allProducts.filter(x => x.for === 'mans');
      allProducts = x;
    }
    else if (sortedData === 'genderfemale') {
      let x = allProducts.filter(x => x.for !== 'mans');
      allProducts = x;
    }
    else if (sortedData === 'colorwhite') {
      let x = allProducts.filter(x => x.color === 'white');
      allProducts = x;
    }
    else if (sortedData === 'colorblack') {
      let x = allProducts.filter(x => x.color === 'black');
      allProducts = x;
    }
    else if (sortedData === 'colorother') {
      let x = allProducts.filter(x => x.color !== 'black' && x.color !== 'white');
      allProducts = x;
    }
    else if (sortedData === 'materialcoton') {
      let x = allProducts.filter(x => x.material === 'coton');
      allProducts = x;
    }
    else if (sortedData === 'materialtexas') {
      let x = allProducts.filter(x => x.material === 'texas');
      allProducts = x;
    }
    else if (sortedData === 'materialpoliester') {
      let x = allProducts.filter(x => x.material === 'poliester');
      allProducts = x;
    }
    else if (sortedData === 'materialother') {
      let x = allProducts.filter(x => x.material !== 'coton' && x.material !== 'texas' && x.material !== 'poliester');
      allProducts = x;
    }
    else if (sortedData === 'seasonwinter') {
      let x = allProducts.filter(x => x.season === 'winter');
      allProducts = x;
    }
    else if (sortedData === 'seasonsummer') {
      let x = allProducts.filter(x => x.season === 'summer');
      allProducts = x;
    }
    jsxElement = <DisplayProducts allProducts={allProducts} />
  }
  else {
    jsxElement = <div className="skeletons__div">
      <Skeleton className='skeletonProducts' />
      <Skeleton className='skeletonProducts' />
      <Skeleton className='skeletonProducts' />
      <Skeleton className='skeletonProducts' />
      <Skeleton className='skeletonProducts' />
      <Skeleton className='skeletonProducts' />
      <Skeleton className='skeletonProducts' />
      <Skeleton className='skeletonProducts' />
    </div>
  }
  return (
    <div className="products__div">
      <MiniNav />
      <FilterProducts productsNum={allProducts.length === 0 ? '...' : allProducts.length} />
      {jsxElement}
    </div>
  );
};

export default Products;
