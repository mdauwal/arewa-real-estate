import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/svg/keyboardArrowRightIcon.svg";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // For Firestore

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { fullName, email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Email validation pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation for fullName, email, and password
    if (fullName && emailRegex.test(email) && password.length > 5) {
      try {
        // Create user with Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user details in Firestore
        await setDoc(doc(db, "users", user.uid), {
          fullName,
          email,
          createdAt: new Date(),
        });

        toast.success("Signup successful!");
      } catch (error) {
        toast.error("Signup failed. Please try again.");
        console.error("Error during signup:", error);
      }
    } else {
      toast.error("Something went wrong! Please check your inputs.");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome</p>
        </header>
        <form onSubmit={onSubmit}>
          {/* Full Name Input */}
          <input
            type="text"
            placeholder="Full Name"
            className="nameInput"
            id="fullName"
            value={fullName}
            onChange={onChange}
          />
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="emailInput"
            id="email"
            value={email}
            onChange={onChange}
          />

          {/* Password Input */}
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
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

          <div className="signInBar">
            <p className="signInText">Sign up</p>
            <button type="submit" className="signInButton">
              <ArrowRight fill="#fff" width={"34px"} height={"34px"} />
            </button>
            <Link to="/" className="registerLink">
              Signup
            </Link>
          </div>
        </form>
        <ToastContainer /> {/* Toast container to display toasts */}
      </div>
    </>
  );
};

export default Signup;
