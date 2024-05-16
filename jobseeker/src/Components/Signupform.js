// signup  form
import React, { useState } from "react";
import "./Signupcss.css";
import Lastnav from "./Lastnav";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signupform() {
  const [validation, setValidation] = useState();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
 
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
 
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    
    setUser({ ...user, [name]: value });

      if(e.target.value === "")
        {
            setValidation(4)
          }else if(e.target.value !== "")
            {
              setValidation(5)
            }else if(e.target.value === ' '|| e.target.value === '  ' ){
              setValidation(4)
            }else{
          setValidation(9)
        }
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  //  validateInput(name, value);
  };
  // const validateInput = (name, value) => {
  //   if (value.trim() === '') {
  //     setErrors({
  //       ...errors,
  //       [name]: 'Input field cannot be empty',
  //     });
  //   } else {
  //     setErrors({
  //       ...errors,
  //       [name]: '',
  //     });
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      dob,
      gender,
      email,
      phone,
      password,
      confirmPassword,
    } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
        Birthday: dob,
        Gender: gender,
        Email: email,
        PhoneNo: phone,
        Password: password,
        ConfirmPassword: confirmPassword,
      }),
    });
    const data = await res.json();

    if (data.message === "Registered Successfully") {
      window.alert("registration successful");
      setValidation(1);
      navigate("/profile");
    } else if (data.message === "Password not matching") {
      setValidation(2);
      // window.alert("Password not matching");
    } else {
      //  window.alert("Invalid Registration")
      setValidation(3);
    }
  };

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
          <form method="post" className="boundry">
            <div>
            {validation == 4 ? (
              <p className="text-danger"> can not be empty</p>
            ) : (
              <p></p>
            )}
            {validation == 5 ? (
              <p className="text-danger"> </p>
            ) : (
              <p></p>
            )}
            {errors.firstName && <p style={{ color: 'red' }}>{errors.input1}</p>}
              <input
                placeholder="First Name *"
                type="text"
                autoComplete="off"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleInputs}
                required
                className="form-control form-control-lg"
              />
            </div>
            <div>
            
              <input
                placeholder=" Last Name *"
                type="text"
                autoComplete="off"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleInputs}
                required
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <input
                placeholder=""
                type="date"
                autoComplete="off"
                id="dob"
                name="dob"
                value={user.dob}
                onChange={handleInputs}
                className="form-control form-control-lg"
              />
            </div>
            <div className="my-3 form-control form-control-lg">
              <label>
                <b className="">Gender: </b>
              </label>
              <input
                placeholder=""
                type="radio"
                id="male"
                name="gender"
                value="male"
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
                checked={user.gender === "female"}
                onChange={handleGenderChange}
                className="form-check-input mx-3  "
              />
              <label htmlFor="female" className="text-black">
                Female
              </label>
            </div>
            <div>
           
              <input
                placeholder="Email"
                type="email"
                autoComplete="off"
                id="email"
                name="email"
                className="form-control form-control-lg"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div>
              <input
                placeholder="Phone"
                type="tel"
                autoComplete="off"
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
                autoComplete="off"
                id="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                className="form-control form-control-lg"
              />
            </div>
            <div>
              {validation == 2 ? (
                <p className="text-danger">Password not matching</p>
              ) : (
                <label htmlFor="confirmPassword">Confirm Password:</label>
              )}
              <input
                placeholder="Confirm Password *"
                type="password"
                autoComplete="off"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputs}
                className="form-control form-control-lg"
              />
            </div>
            <div></div>
            {validation == 3 ? (
              <p className="text-danger">Invalid register</p>
            ) : (
              <p></p>
            )}
            {validation == 1 ? (
              <p className="text-success"> register successful</p>
            ) : (
              <p></p>
            )}
            <NavLink to="/profile">
              <button
                id="signupbtn"
                type="submit"
                className="btn btn-primary btn-lg nextbtn"
                onClick={PostData}
              >
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
