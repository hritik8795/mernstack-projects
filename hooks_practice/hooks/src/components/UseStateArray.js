import React, { useState } from 'react'

const UseStateArray = () => {
    
    const biodata =[
        {
            id:0 ,myName:"hritik" ,age :23
        },
        {
            id:1 ,myName:"shukla",age :22
        },
        {
            id:2 ,myName:"solemn",age:33
        },
        {
            id:3 ,myName:"hello",age:222
        }
    ]

    const [myArray,setMyArray] =useState(biodata);

    const removeElem =(id)=>{
        alert(`&{id }is deleted successfully`);
        const myNewArray =myArray.filter((curElem) =>{
            return curElem.id !== id;
        
        })
        setMyArray(myNewArray);
    }

    const clearArray =()=>{
        setMyArray([]);
    }
    console.log(biodata);
  return (
    <>
        {
        myArray.map((curelem) =>{
            return (
                <h1 style={{borderBlockStyle:'solid',width:600, borderRadius:15, margin:"auto", marginBottom:20 ,padding:20,backgroundColor:'white'}}>Name:{curelem.myName} & age:{curelem.age}
                <button style={{width:100,backgroundColor:'red',color:'white',borderRadius:5 ,marginLeft:40}} onClick={() => removeElem(curelem.id)}>Remove</button>
                </h1>
                )
        } 
        )
        }
        <button style={{width:150,height:50 ,borderRadius:5 ,backgroundColor:"grey",color:"white"}} onClick ={clearArray}>clear</button> 
    </>
  )
}

export default UseStateArray