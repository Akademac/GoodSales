import { moduleShowHide } from "../../redux/actions/index";
import { useDispatch } from "react-redux";

const SignUpBtn = () => {
  let dispatch = useDispatch();
  const handleModule = () => {
    dispatch(moduleShowHide({visibility: true, type: 'signin'}));
  };
  return (
    <span className="signup_btn" onClick={handleModule}>
      <i className="fa fa-sign-in me-1" style={{ marginRight: ".4rem" }}>
      </i>
      Signup
    </span>
  );
};

export default SignUpBtn;
