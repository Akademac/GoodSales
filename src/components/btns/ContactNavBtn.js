import { Link } from 'react-router-dom'

const ContactNavBtn = ({miniFontSize}) => {
  return (
    <li className='navLis' style={{fontSize: miniFontSize}}><Link to='/contact'>Contact</Link></li>
  )
}

export default ContactNavBtn;