import React,{useEffect, useState} from 'react'

//yahan hum padhne waale cleanup function

const UseEffect2 = () => {
    const[widthCount,setWidthCount] =useState(window.screen.width);

    const actualWidth =()=>{
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth);
    }
    useEffect(() =>{
      console.log("add event");
        window.addEventListener("resize",actualWidth);

         return () =>{
          console.log("reove event ");
          window.removeEventListener("resize",actualWidth);
          
         }

    })
  return (
    <div style={{position:'absolute',top:'40%',left:'35%',color:'#fff',fontSize:'30px'}}>
        <p>the actual size of the window is :</p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect2