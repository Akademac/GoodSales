import { Link } from 'react-router-dom'

const ContactNavBtn = ({miniFontSize}) => {
  return (
    <li className='navLis' style={{fontSize: miniFontSize}}><Link to='/GoodSales/contact'>Contact</Link></li>
  )
}

export default ContactNavBtn;