import Banner from "./Banner";
import MainDiv from "./MainDiv"
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <MainDiv />
      <Banner />
      <Products />
    </div>
  )
}

export default Home;