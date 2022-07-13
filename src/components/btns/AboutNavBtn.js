import { Link } from 'react-router-dom'

const AboutNavBtn = ({miniFontSize}) => {

  return (
    <li className='navLis' style={{fontSize: miniFontSize}}><Link to='/about'>About</Link></li>
  )
}

export default AboutNavBtn;