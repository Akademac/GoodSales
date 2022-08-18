import { Link } from 'react-router-dom'

const HomeNavBtn = ({miniFontSize}) => {
  return (
    <li className='navLis' style={{fontSize: miniFontSize}}><Link to='/GoodSales'>Home</Link></li>
  )
}

export default HomeNavBtn;