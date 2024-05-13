// signup  form
import React, { useState } from "react";
import "./Signupcss.css";
import Lastnav from "./Lastnav";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signupform() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "", lastName: "", dob: "", gender: "", email: "", phone: "", password: "", confirmPassword: ""
  })
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })

  }
  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, dob, gender, email, phone, password, confirmPassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FirstName: firstName, LastName: lastName, Birthday: dob, Gender: gender, Email: email, PhoneNo: phone, Password: password, ConfirmPassword: confirmPassword
      })
    })
    const data = await res.json();
    if (data.message === "Registered Successfully") {
      window.alert("registration successful");
      navigate("/profile");
    } else if(data.message === "Password not matching") {
      window.alert("Password not matching");
    }
    else {
       window.alert("Invalid Registration")
    }
  }


  return (
    <>
      <div className="signuppage">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://cdn.dribbble.com/users/452635/screenshots/2809164/illu_sign_up.png"
            className="img-fluid img1"
            alt="Sample image"
          />
        </div>
        <div className="formfiels">
          <h2></h2>
          <form method="post" className="boundry">
            <div>
              {/* <label htmlFor="firstName">
              First Name<span>*</span>:
            </label> */}
              <input
                placeholder="First Name *"
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleInputs}
                required
                className="form-control form-control-lg"
              />
            </div>
            <div>
              {/* <label htmlFor="lastName">
              Last Name<span>*</span>:
            </label> */}
              <input
                placeholder=" Last Name *"
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleInputs}
                required
                className="form-control form-control-lg"
              />
            </div>
            <div>
              {/* <label htmlFor="dob">
              Date of Birth<span>*</span>:
            </label> */}
              <input
                placeholder=""
                type="date"
                id="dob"
                name="dob"
                value={user.dob}
                onChange={handleInputs}
                className="form-control form-control-lg"
              />
            </div>
            <div className="my-3">
              <label>
                <b className="">Gender: </b>
              </label>
              <input
                placeholder=""
                type="radio"
                id="male"
                name="gender"
                value="male"
                //value={user.gender}
                //onChange={handleInputs}
                checked={user.gender === "male"}
                onChange={handleGenderChange}
                className="form-check-input mx-3  "
              />
              <label htmlFor="male" className="text-black">
                {" "}
                Male
              </label>
              <input
                placeholder=""
                type="radio"
                id="female"
                name="gender"
                value="female"
                //value={user.gender}
                // onChange={handleInputs}
                checked={user.gender === "male"}
                onChange={handleGenderChange}
                className="form-check-input mx-3  "
              />
              <label htmlFor="female" className="text-black">
                Female
              </label>
            </div>
            <div>
              {/* <label htmlFor="email">:</label> */}
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                //value={emilid}
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div>
              {/* <label htmlFor="phone">Phone:</label> */}
              <input
                placeholder="Phone"
                type="tel"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                placeholder="Confirm Password *"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputs}
                className="form-control form-control-lg"
              />
            </div>
            <div>
              {/* <label>
              Compulsory Fields<span>*</span>:
            </label> */}
              {/* <input
                placeholder=""
                type="checkbox"
                id="compulsoryFields"
                name="compulsoryFields"
                required
              />
              <label htmlFor="compulsoryFields">
                I confirm that all compulsory fields are filled
              </label> */}
            </div>
            <NavLink to="/profile">
              <button type="submit" className="btn btn-primary btn-lg nextbtn" onClick={PostData}>
                Sign up
              </button>
            </NavLink>
          </form>
        </div>
      </div>
      <div className="my-5">
        <Lastnav />
      </div>
    </>
  );
}
