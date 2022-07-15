import './card.css'

const Card = ({img, desc, material, season, price}) => {
  let imgs = '/GoodSales' + img.substring(2);
  return (
    <div className='cards'>
      <img src={imgs} alt="Clothes" />
      <div className='card__details'>
        <h3>{desc.slice(0, 30)}...</h3>
        <p>Material: <b>{material}</b></p>
        <p>Season: <b>{season}</b></p>
        <span><b className='price'>{price}$</b></span>
        <div className='sizes__div'>
          <span>xs</span>
          <span>s</span>
          <span>m</span>
          <span>l</span>
          <span>xl</span>
        </div>
        <div className='cardBtns__div'>
          <button>Add to cart!</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default Card;