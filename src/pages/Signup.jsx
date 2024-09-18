import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/svg/keyboardArrowRightIcon.svg";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome</p>
        </header>
        <form>
          <input
            type="email"
            placeholder="email"
            className="emailInput "
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={VisibilityIcon}
              alt="VisibilityIcon"
              className="showPassword"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          {/* <Link to="/forgot-password" className="forgotPasswordLink">
            forgot password
          </Link> */}
          <div className="signInBar">
            <p className="signInText">Sign up</p>
            <button className="signInButton">
              <ArrowRight fill="#fff" width={"34px"} height={"34px"} />
            </button>
            <Link to="/signUp" className="registerLink">
              Signin
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;