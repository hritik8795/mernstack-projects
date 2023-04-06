//controlled data hota jisme name , value ={"something "} and onchange ={function} 
//use ref uncontrolled form ke liye use hota hai 
import React, { useRef, useState } from 'react'

const Uncontrolled = () => {

  //it is like a useState only and its preserve the value .No rerender

  const luckyName =useRef(null);
  const[show,setShow] =useState(false);

  const submitForm =(e)=>{
    e.preventDefault();
    const name =luckyName.current.value;
    name === "" ? alert("pease enter some data first") :setShow(true);
   
  }
  return (
    <div className='box'>
      <form action='' onSubmit={submitForm}>
        <div>
        <label htmlFor='luckyName'>Enter your LuckyName</label>
        <input type='text' id='luckyName' ref={luckyName}/>
        </div>
        <br />
        <button>Submit</button>

      </form>
      <p>{show ? `your lucky name is ${luckyName.current.value}`:""}</p>
    </div>
  )
}

export default Uncontrolled