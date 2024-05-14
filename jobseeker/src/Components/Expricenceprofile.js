import React, { useState } from "react";

export default function Expricenceprofile() {
  const [val, setVal] = useState(['']);
  const handleAdd = () => {
    // const abc= [...val, []]
    setVal([...val,'']);
  }
  const  handelChange=(event,i)=>{
    const values = [...val];
    values[i] = event.target.value;
    setVal(values);
  }

  return (
   <>
            <button onClick={handleAdd()}>Add experience</button>
            {
            val.map((data,i)=>{
                return(
                //  <input onChange={(e)=>handelChange(e,i)} /> 
                 <input type="text" className="form-control" placeholder="experience" onChange={(e)=>handelChange(e,i)}/>
                )
            })
          }
   </>
   );
}  
// import React,{useState} from 'react'

// export default function Expricenceprofile() {
//     const [inputFields, setInputFields] = useState(['']);

//     const addInputField = () => {
//       setInputFields([...inputFields, '']);
//     };
  
//     const handleInputChange = (index, event) => {
//       const values = [...inputFields];
//       values[index] = event.target.value;
//       setInputFields(values);
//     };
  
//     const removeInputField = (index) => {
//       const values = [...inputFields];
//       values.splice(index, 1);
//       setInputFields(values);
//     };
  
//   return (
//     <div>
//     {inputFields.map((inputField, index) => (
//       <div key={index}>
//         <input
//           type="text"
//           value={inputField}
//           onChange={(event) => handleInputChange(index, event)}
//         />
//         <button onClick={() => removeInputField(index)}>Remove</button>
//       </div>
//     ))}
//     <button onClick={addInputField}>Add Input Field</button>
//   </div>
//   )
// }
   
   
//     // <div>
//     //   <div className=" col-md-4 border-end">
//     //     <div className="p-3 py-5">
//     //       <div className="d-flex justify-content-between align-items-center experience">
//     //         <span>Experience</span>
//     //         <button
//     //         //   className=" mx-3 btn btn-primary profile-button"
//     //         //   type="button"
//     //           onClick={handleAdd()}
//     //         >
//     //           Add experience
//     //         </button>
//     //       </div>
//     //       {/* <br /> */}
//     //       {/* <div className="col-md-12">
//     //         <input
//     //           type="text"
//     //           className="form-control"
//     //           placeholder="experience"
//     //         />
//     //       </div>

//     //       <div className="col-md-12">
//     //         <input
//     //           type="text"
//     //           className="form-control"
//     //           placeholder="additional details"
//     //         />
//     //       </div>
//     //       <div className="col-md-12">
//     //         <input
//     //           type="text"
//     //           className="form-control"
//     //           placeholder="Company detalis details"
//     //         />
//     //       </div> */}
//     //       {
//     //         val.map((data,i)=>{
//     //             return(
//     //              <input onChange={(e)=>handelChange(e,i)} /> 
//     //             )
//     //         })
//     //       }
//     //     </div>
//     //   </div>
//     // </div>
 