import { showMiniNav } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux/es/exports";
import HomeNavBtn from "./btns/HomeNavBtn";
import ProductsNavBtn from "./btns/ProductsNavBtn";
import AboutNavBtn from "./btns/AboutNavBtn";
import ContactNavBtn from "./btns/ContactNavBtn";
import LogInBtn from "./btns/LogInBtn";
import SignUpBtn from "./btns/SignUpBtn";
import CartBtn from "./btns/CartBtn";
import '../styles/queris.css';
const MiniNav = () => {
  let state = useSelector((state) => state.miniNavVisibility);
  let dispatch = useDispatch();
  let handleMiniNav = () => {
    dispatch(showMiniNav(false));
  };
  return (
    <div
      className="mini__nav"
      style={state ? { width: "100%"} : { width: "0%"}}
      onClick={handleMiniNav}
    >
      <HomeNavBtn miniFontSize='1.5rem' />
      <ProductsNavBtn miniFontSize='1.5rem' />
      <AboutNavBtn miniFontSize='1.5rem' />
      <ContactNavBtn miniFontSize='1.5rem' />
      <LogInBtn miniFontSize='2rem' />
      <SignUpBtn miniFontSize='2rem' />
      <CartBtn miniFontSize='2rem' />
    </div>
  );
};

export default MiniNav;
