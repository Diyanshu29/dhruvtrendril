// forget password page
import React, { useState } from "react";
import Lastnav from "./Lastnav";
import { NavLink } from "react-router-dom";

export default function Forgetpass() {
  const [emailid, setemailid] = useState("");
  const popup = () => {
    alert("your password will be sent to email");
  };
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
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  value={emailid}
                  onChange={(e) => {
                    setemailid(e.target.value);
                  }}
                  placeholder="Email "
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                  onClick={popup}
                >
                  Get Your Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Lastnav />
    </section>
  );
}
