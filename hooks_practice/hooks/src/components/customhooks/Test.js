import React, { useState } from 'react'

const Test = () => {
  const [count,setCount] =useState(0)

  return (
    <>
    <div>
      <h1>{count}</h1>
      </div>
      <button style={{backgroundColor:"black" , color:"white",width:100 ,height:50}} onClick={()=> setCount(count+1)}>Click Test</button>
    </>
  )
}

export default Test;