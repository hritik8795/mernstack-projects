import React,{useState} from 'react'

// ye hai sort circuit Evalution jahan pr mainly || and && ka prayog karte hai 

// definition of sort circuit evaluation :: multiple rendering kara sakte hai with the help of || and && operators

const SortcircuitEval = () => {
    const [demo,Setdemo] =useState("hello solen")
  return (
    <>
    <div style={{borderBlockStyle:'solid',width:600, borderRadius:15, margin:"auto", marginBottom:20 ,padding:20,backgroundColor:'white'}}>
    <h1>{demo || <>
    <h1>this is the example of sort circuit evaluation</h1>
    </>}</h1>

    
    </div>
    <h1 style={{borderBlockStyle:'solid',width:600, borderRadius:15, margin:"auto", marginBottom:20 ,padding:20,backgroundColor:'white'}}>{demo && "vinod"}</h1>
    </>
  )
}

export default SortcircuitEval