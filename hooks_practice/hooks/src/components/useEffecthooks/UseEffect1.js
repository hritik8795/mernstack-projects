import React, { useState,useEffect } from 'react'
import useTitleCount from '../customhooks/useTitleCount'
// import "../form/form.css"
// agar humein kuch aisa kaam karna ho jo page reload karte hi run kare to hum use karenge useeffect ka

const UseEffect1 =() =>{

    const [count ,setCount] =useState(0)
    // useEffect(()=>{
    //     console.log("bhai hum pahle use effect hin hum pahle aayenge")
    //     if(count>=1){
    //         document.title =`chats (${count} )`
    //     }
    //     else{
    //         document.title =`chats`
    //     }
        
    // },[count]); //dependency list bolte hai jo array use kia hai iska istemaal karte keval firstime load me agar kuch dikhana ho, pr hume count dikhana hai 

    //------------------------------------------------------------------------------------------------------------------------------------------------
    //hum do use effect bhi laga sakte hai pr jo pehle ayega bus wahi run hoga 

    useTitleCount(count)
    useEffect (()=>{

        console.log("i am second use effect aur bhaiya main baad me chalunga")
    },[])
    console.log("hello outsider from  use effect") //pehli priority kisi bhi code ko milegi for use effect ko milegi
return(
    <div>
        <h1>{count}</h1>
        
        <button onClick={()=>setCount(count+1)}>Click me </button>    
        
        </div>
)
}
export default UseEffect1;