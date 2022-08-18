import { moduleShowHide } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
const LogInBtn = () => {
  const dispatch = useDispatch();
  const handleModule = () => {
    dispatch(moduleShowHide({visibility: true, type: 'login'}));
  };
  return (
    <span className="login_btn" onClick={handleModule}>
      <i className="fa fa-user-plus me-1" style={{ marginRight: ".4rem" }}></i>
      Login
    </span>
  );
};

export default LogInBtn;
