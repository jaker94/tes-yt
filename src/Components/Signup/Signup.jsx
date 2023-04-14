import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch } from 'react-redux';
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import { auth } from '../Firebase/Firebase';
import { login } from '../../features/userSlice';
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const dispatch = useDispatch();
    const history = useNavigate();

    const signUp = (e) => {
        (e).preventDefault();

        if (!fName) {
            return alert('Please enter a first name!')
        }
        if (!lName) {
            return alert('Please enter a last name!')
        }
        if (!email) {
            return alert('Please enter a email!')
        }
        if (!password) {
            return alert('Please enter a password!')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: fName
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: fName,
                }))
                history('/teslaaccount')
            })
        }).catch((error) => alert(error.message))
    }

  return (
    <div className='signup'>
        <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="signup__info">
        <h1>Create an Account</h1>
        <form className="signup__form">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            placeholder='First Name'
            value={fName}
            onChange={(event) => setFName(event.target.value)}
          />
              <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            placeholder='Last Name'
            value={lName}
            onChange={(event) => setLName(event.target.value)}
          />
              <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <ButtonPrimary name="Create Account" type="submit" onClick={signUp}/>
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span>
          <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="Sign In" type="submit" />
        </Link>
      </div>
    </div>
  )
}

export default Signup