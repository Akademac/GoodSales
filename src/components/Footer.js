import "./footer.css";
import AboutNavBtn from "../components/btns/AboutNavBtn";
import HomeNavBtn from "../components/btns/HomeNavBtn";
import ContactNavBtn from "../components/btns/ContactNavBtn";
import ProductsNavBtn from "../components/btns/ProductsNavBtn";

const footerLogo =
  window.location.origin + "/GoodSales/assets/logoes/main_logo.png";
const Footer = () => {
  return (
    <div className="footer__div">
      <div className="footerNav__div">
        <HomeNavBtn />
        <AboutNavBtn />
        <ContactNavBtn />
        <ProductsNavBtn />
      </div>
      <div className="footerBottom__div">
        <div className="footer__aboutTxt">
          GoodSales is an internet retail market, based on the best prices for
          certain products in the world. We sell mainly clothes for women, men,
          and kids. Different colors, for all seasons, and the best brands.
          Check out the products page, and our filter options...
        </div>
        <div className="footer__contact">
          <img src={footerLogo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
