// signup  form
import React, { useState } from "react";
import "./Signupcss.css";
import Lastnav from "./Lastnav";
import { NavLink } from "react-router-dom";

export default function Signupform() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [emilid, setemilid] = useState("");

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
          <form action="#" method="post" className="boundry">
            <div>
              {/* <label htmlFor="firstName">
              First Name<span>*</span>:
            </label> */}
              <input
                placeholder="First Name *"
                type="text"
                id="firstName"
                name="firstName"
                value={firstname}
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
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
                value={lastname}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
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
                value={emilid}
                onChange={(e) => {
                  setemilid(e.target.value);
                }}
              />
            </div>
            <div>
              {/* <label htmlFor="phone">Phone:</label> */}
              <input
                placeholder="Phone"
                type="tel"
                id="phone"
                name="phone"
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
              <button type="submit" className="btn btn-primary btn-lg nextbtn">
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
