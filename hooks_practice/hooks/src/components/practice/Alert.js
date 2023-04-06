import React, { useState } from 'react'

const Alert = () => {
  const [check,setCheck] =useState(true)

  const checkout =()=>{
    if(check===false){
      console.log("are you sure");

    }
    else {
      setCheck(false);
    }
   
  }

  return (
    <div>
    
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={checkout}/>
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div></div>
  )
}

export default Alert
// import  React,{useState}  from 'react';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// class Alert extends React.Component {
//   submit = () => {
//     confirmAlert({
//       title: 'Confirm to submit',
//       message: 'Are you sure to do this.',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () =>alert("yes"),
//         },
//         {
//           label: 'No',
//           onClick: () => setCheck(false)
//         }
//       ]
//     });
//   };

//   render() {
//     return (
//       <div className='container'>
//         {/* <button onClick={this.submit}>Confirm dialog</button> */}
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={this.submit}/>
//       </div>
//     );
//   }
// }
// export default Alert