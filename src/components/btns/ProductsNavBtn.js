import { Link } from 'react-router-dom'

const ProductsNavBtn = ({miniFontSize}) => {
  return (
    <li className='navLis' style={{fontSize: miniFontSize}}><Link to='/GoodSales/products'>Products</Link></li>
  )
}

export default ProductsNavBtn;