import 'react-loading-skeleton/dist/skeleton.css'

import Card from "./card/Card";


const DisplayProducts = ({ allProducts }) => {
  let jsxElement;

  jsxElement = allProducts.map((e, index) => {
    return <Card key={index} img={e.img} desc={e.description} material={e.material} price={e.price} season={e.season} id={e.key} />
  })
  return (<div className="displayProducts__div">
    {jsxElement}
  </div>)
}

export default DisplayProducts;