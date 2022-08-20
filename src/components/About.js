import "./about.css";
import MiniNav from "./MiniNav";

const logo = window.location.origin + "/GoodSales/assets/logoes/main_logo.png";
const About = () => {
  return (
    <div className="about__wrapper">
      <MiniNav />
      <div className="about__div">
        <div className="aboutDiv__left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="aboutDiv__right">
          <div className="about__txt">
            <h3>About GoodSales</h3>
            GoodSales is an internet retail market, based on the best prices for
            certain products in the world. We sell mainly clothes for women,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis praesentium magnam dignissimos dolor qui tempore eos temporibus aperiam? Praesentium inventore porro eos temporibus quidem aperiam repudiandae! Dignissimos quae placeat voluptates.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facere magnam qui, debitis explicabo iste rem asperiores cumque soluta aspernatur similique neque laudantium velit repudiandae assumenda perferendis amet ullam suscipit?
            men, and kids. Different colors, for all seasons, and the best
            brands. Check out the products page, and our filter options...
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
