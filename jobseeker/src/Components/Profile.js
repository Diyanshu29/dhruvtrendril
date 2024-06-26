import React,{useRef,usestate ,props} from "react";
import Upperbar from "./Upperbar";
import Imgprofile from "./Imgprofile";

export default function Profile(props) {

  return (
    <>
      
      <div className="container rounded bg-white mt-5 mb-3 ">
        <div className="row">
          
          <Imgprofile/>
          
          <div className="col-md-6 border-end">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right .text-black">Profile</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  {/* <label className="labels">Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                  />
                </div>
                <div className="col-md-6">
                  {/* <label className="labels">Surname</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="surname"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  {/* <label className="labels">Mobile Number</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                  />
                </div>
                <div className="col-md-12">
                  {/* <label className="labels">Address Line 1</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                  />
                </div>     
                <div className="col-md-12">
                  {/* <label className="labels">Area</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Area"
                  />
                </div>
                <div className="col-md-12">
                  {/* <label className="labels">Email ID</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-12">
                  {/* <label className="labels">Education</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="education"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  {/* <label className="labels">Country</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                  />
                </div>
                <div className="col-md-6">
                  {/* <label className="labels">State/Region</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="state"
                  />
                </div>
              </div>
              <div className="my-3 d-flex p-2 bd-highlight">
                <div className=" text-center">
                  <button
                    className="  btn btn-success profile-button"
                    type="button"
                  >
                    Edit Profile
                  </button>
                </div>
                <div className=" text-center">
                  <button
                    className=" mx-3 btn btn-primary profile-button"
                    type="button"
                  >
                    Save Profile
                  </button>
                </div>
                </div>
            </div>
          </div>
          
          <div className=" col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Experience in Designing</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="experience"
                />
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Additional Details</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="additional details"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
