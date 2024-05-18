import { props, useRef, useState } from "react";

export default function Imgprofile() {
    const profileimg = useRef(null);
  const [imge, setImg] = useState("");

  const handleprofile = () => {
    profileimg.current.click();
  };

  const handleimgchange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImg(event.target.files[0]);
  };
  return (
    <div className="my-1 col-md-2 border-right border-end">
        <div className=" d-flex flex-column align-items-center text-center p-3 py-5 " onClick={handleprofile} >
        {imge ? (<img src={URL.createObjectURL(imge)} className="rounded-circle mt-5" style={{width:"150px", height:"150px"}} />) : 
          ( <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />)
          }
           <span className="font-weight-bold">Edogaru</span>
           <span className="text-black-50">edogaru@mail.com.my</span>
        <input
              className=" my-3 btn btn-primary profile-button"
              type="file"
              ref={profileimg}
              onChange={handleimgchange}
              style={{ display: "none" }}
              placeholder="upload image"
            />
            <button className="mx-3 btn btn-primary profile-button my-3
            " onClick={handleprofile}>change profile</button>
        </div>
        
    </div>
  )
}
