// login page
import React, { useState } from "react";
import "./Regicss.css";
import Lastnav from "./Lastnav";
import { NavLink, useNavigate } from "react-router-dom";

export default function Registerpage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "", password: ""
  })
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })

  }
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Email: email, Password: password
      })
    })
    const data = await res.json();
    if (data.message === "LoggedIn Successfully") {
      window.alert("LoggedIn Successfully");
      navigate("/profile");
    } else if (data.message === "Enter Valid Email") {
      window.alert("Enter Valid Email");
    }
    else if (data.message === "Enter Valid Password") {
      window.alert("Enter Valid Password");
    }
    else {
      window.alert("Invalid Registration")
    }
  }

  // const loginbtn = () => {
  //   console.log("email=" + emailid + "\npassowrd=" + passkey);
  //   setemailid("");
  //   setpasskey("");
  // };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3"> </p>
                {/* <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>*/}
              </div>
              {/* 
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div> */}

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Email "
                />
                {/* <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label> */}
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="password"
                />
                {/* <label className="form-label" htmlFor="form3Example4">
                  Password
                </label> */}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div> */}
                {/* <a href="\" className="danger text-body">
                  Forgot password?
                </a> */}

                <NavLink
                  to="/forget"
                  class="link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                >
                  Forgot password?
                </NavLink>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <NavLink to="/profile">
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg"
                    onClick={PostData}
                  >
                    Login
                  </button>
                </NavLink>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <NavLink class="btn btn-primary" to="/signup" role="button">
                    <button class=" mx-2 btn btn-danger">
                      Register if you note
                    </button>
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Lastnav />
    </section>
  );
}
