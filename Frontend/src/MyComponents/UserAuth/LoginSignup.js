import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";
import MailOutLineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import './LoginSignUp.css';
import FaceIcon from "@mui/icons-material/Face";
import Phone from "@mui/icons-material/Phone";
import logo from "./logo.png";
import Lock from "@mui/icons-material/Lock";
import { useHistory, Redirect } from "react-router-dom";

function LoginSignUp(props) {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const history = useHistory();

  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);

  const signUpNameRef = useRef(null);
  const signUpEmailRef = useRef(null);
  const signUpPhoneRef = useRef(null);
  const signUpPasswordRef = useRef(null);
  const signUpConfirmPasswordRef = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loading, setloading] = useState(false);
  

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const registerSubmit = (e) => {
  //   e.preventDefault();

   
  // };
  // const registerDataChange = (e) => {
 
  // };


  const loginSubmit = (event) => {
    event.preventDefault();
    
    const enteredEmail = loginEmailRef.current.value;
    const enteredPassword = loginPasswordRef.current.value;
    console.log(enteredEmail);
    console.log(enteredPassword)
    setloading(true);
    // fetching and uploading the data via api...
    console.log("form submitted!!!");
    // after showing the respective message to the user, redirecting the user to '/'
    
    
    history.replace('/');
    
    
  };
  
  const signUpSubmit = (event) => {
    event.preventDefault();

    const enteredName = signUpNameRef.current.value;
    const enteredEmail = signUpEmailRef.current.value;
    const enteredPhone = signUpPhoneRef.current.value;
    const enteredPassword = signUpPasswordRef.current.value; 
    const enteredConfirmPassword = signUpConfirmPasswordRef.current.value;

    console.log(enteredConfirmPassword);
    setloading(true);

    //sending the data

    console.log('signupsumiited');
  }



  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  const onClose = () => {
    history.goBack();
  }

    return (
      <Modal onClose={onClose} setClass={"LoginSignUpContainer"}>
        <div className="cover">
          <img className="logo" src={logo} alt="ASH" />

          <div className="LoginSignUpBox">
            <div>
              <div className="login_signUp_toggle">
                <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
              </div>
              <button ref={switcherTab}></button>
            </div>

            <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
              <div className="loginEmail">
                <MailOutLineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                  ref={loginEmailRef}
                />
              </div>

              <div className="loginPassword">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={loginPasswordRef}
                />
              </div>
              <Link to="/password/forgot">Forget Password ?</Link>
              <input type="submit" value="Login" className="loginBtn" />
            </form>

            

            <form
              className="signUpForm"
              ref={registerTab}
              onSubmit={signUpSubmit}
            >
              <div className="signUpName">
                <FaceIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  ref={signUpNameRef}
                />
              </div>

              <div className="signUpEmail">
                <MailOutLineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  // name="email"
                  ref={signUpEmailRef}
                  //   value={email}
                  // onChange={registerDataChange}
                />
              </div>
              <div className="signUpEmail">
                <Phone />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  required
                  // name="email"
                  max="10"
                  min="10"
                  ref={signUpPhoneRef}
                  //   value={email}
                  // onChange={registerDataChange}
                />
              </div>

              <div className="signUpPassword">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  // name="password"
                  ref={signUpPasswordRef}
                  //   value={password}
                  // onChange={registerDataChange}
                />
              </div>
              <div className="signUpPassword">
                <Lock />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  // name="password"
                  ref={signUpConfirmPasswordRef}
                  //   value={password}
                  // onChange={registerDataChange}
                />
              </div>

              <input type="submit" value="Register" className="signUpBtn" />
                         

            </form>
          </div>
        </div>
      </Modal>
    );
}

export default LoginSignUp;
