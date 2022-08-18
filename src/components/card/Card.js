import './card.css'

import { Link } from 'react-router-dom';
import AddToCart from '../btns/AddToCart';

const Card = ({img, desc, material, season, price, id}) => {
  let imgs = '/GoodSales' + img.substring(2);

  return (
    <div className='cards'>
      <img src={imgs} alt="Clothes" />
      <div className='card__details'>
        <h3>{desc.slice(0, 30)}...</h3>
        <p>Material: <b>{material}</b></p>
        <p>Season: <b>{season}</b></p>
        <span><b className='price'>{price}$</b></span>
        <div className='cardBtns__div'>
          <AddToCart keyProp={id} />
          <button><Link to={`/GoodSales/product/${id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Card;