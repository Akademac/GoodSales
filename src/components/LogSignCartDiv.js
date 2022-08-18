import CartBtn from "./btns/CartBtn";
import LogInBtn from "./btns/LogInBtn";
import SignUpBtn from "./btns/SignUpBtn";

const LogSignCartDiv = () => {
  return (
    <div className="logSignCart_div">
      <span>
        <LogInBtn />
      </span>
      <span>
        <SignUpBtn />
      </span>
      <span>
        <CartBtn />
      </span>
    </div>
  );
};

export default LogSignCartDiv;
