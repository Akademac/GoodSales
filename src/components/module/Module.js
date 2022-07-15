import "./module.css";
import { useDispatch, useSelector } from "react-redux";
import { moduleShowHide } from "../../redux/actions/index";
const Module = () => {
  let state = useSelector((state) => state.moduleShowHide);
  let dispatch = useDispatch();
  let jsxElement;
  let hideModule = () => {
    dispatch(moduleShowHide({ visibility: false, type: "" }));
  };
  let handleSignUp = () => {
    dispatch(moduleShowHide({ visibility: true, type: "signin" }));
  };

  let handleLogIn = () => {
    dispatch(moduleShowHide({ visibility: true, type: "login" }));
  };
  if (state.visibility && state.type === "login") {
    jsxElement = (
      <div className="module_wrapper_show">
        <div className="module_div">
          <h2>Login to Your Account</h2>
          <p>Login using social networks</p>
          <div className="social_icons_div">
            <i className="fa fa-brands fa-facebook"></i>
            <i className="fa fa-brands fa-google-plus-g"></i>
            <i className="fa fa-brands fa-linkedin-in"></i>
          </div>
          <hr className="module_hr" />
          <p className="module_or">or</p>
          <form>
            <input type="email" name="email" id="email" placeholder="email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <button>Sign in</button>
          </form>
          <p>
            <b className="signInSignUpbtn" onClick={handleSignUp}>
              sign up
            </b>
          </p>
          <span onClick={hideModule}>cancel</span>
        </div>
      </div>
    );
  } else if (state.visibility && state.type === "signin") {
    jsxElement = (
      <div
        className={
          state.visibility ? "module_wrapper_show" : "module_wrapper_hide"
        }
      >
        <div className="module_div">
          <h2>Sign Up</h2>
          <form>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
            <input type="email" name="email" id="email" placeholder="email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />

            <input
              type="password"
              name="password"
              id="confirmpassword"
              placeholder="confirm password"
            />
            <button>Sign Up</button>
          </form>
          <p>
            Already have an account? <b className="signInSignUpbtn" onClick={handleLogIn}>login</b>
          </p>
          <span onClick={hideModule}>cancel</span>
        </div>
      </div>
    );
  }
  return jsxElement;
};

export default Module;
