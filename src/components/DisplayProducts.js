import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Card from "./card/Card";


const DisplayProducts = ({ allProducts }) => {
  let jsxElement;
  console.log(allProducts);
  // if (allProducts.fetching) {
  //   jsxElement = <Skeleton count={10}/>
  // }
  // else {
    jsxElement = allProducts.map((e, index) => {
      return <Card key={index} img={e.img} desc={e.description} material={e.material} price={e.price} season={e.season} />
    })
  // }
  return (<div className="displayProducts__div">
    {jsxElement}
  </div>)
}

export default DisplayProducts;