import "./header.css";
import LogSignCartDiv from "./LogSignCartDiv";
import MainNav from "./MainNav";
import { useSelector } from 'react-redux/es/exports';
import BurgerMenuBtn from "./btns/BurgerMenuBtn";

const mainLogo = window.location.origin + "/GoodSales/assets/logoes/main_logo.png";

const Header = () => {
  const state = useSelector(state => state.changeHeaderColorR.payload);
  return (
    <div className={state === true || state === undefined ? 'header' : 'header header__dark'}>
      <span className="main_logo">
        <img src={mainLogo} alt="Main Logo" />
        <span>GoodSales</span>
      </span>
      <MainNav />
      <LogSignCartDiv />
      <BurgerMenuBtn />
    </div>
  );
};

export default Header;
