import AboutNavBtn from './btns/AboutNavBtn';
import ContactNavBtn from './btns/ContactNavBtn';
import HomeNavBtn from './btns/HomeNavBtn';
import ProductsNavBtn from './btns/ProductsNavBtn';

const MainNav = () => {
  return (
    <ul className="mainNav_ul">
      <HomeNavBtn />
      <ProductsNavBtn />
      <AboutNavBtn />
      <ContactNavBtn />
    </ul>
  )
}

export default MainNav;