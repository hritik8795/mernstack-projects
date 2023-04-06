import React, { useState ,useEffect } from 'react'
import "./todo.css"
import { AiOutlinePlus,AiFillDelete } from "react-icons/ai";

//to get the data from localStorage

 const getLocalItems =() =>{
  const list =localStorage.getItem('lists')
  console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }
  else {
    return [];
  }
 }


const Todo = () => {
  const [name ,setName] =useState ()
  const [item,setItem] =useState(getLocalItems())

  const addItem =(e) => {
    // setName(e.target.value)
    // console.log(hel)
    if(!name) {
      alert("please enter something");
    }
    else{
      //update button set karne ke liye hum ek id ki jaroorat hoti hai jisse hum yah pata kar sake ki kise update karna hai 
      const allInputData ={id: new Date().getTime().toString(), name:name}
      setItem([...item,allInputData])
      setName("");
    }
   

  }

  const deleteItem =(id) =>{
    console.log(id);

    const updatedData =item.filter((elem,ind) =>{
      return ind !== id;
    })
    setItem(updatedData)
      

  }

  // remove all data

  const Removeall =()=>{
    setItem([])
  }

  // saving the data in the local storage

  useEffect (()=>{
    localStorage.setItem("lists",JSON.stringify(item))

  },[item])

  return (
    <div className='cont'>
        <p className='pp'>Add your List here.</p>
        <br></br> 
      &nbsp;&nbsp;
        <div>
        <input className="inp" placeholder='enter your text'value={name} onChange={(e) =>setName(e.target.value)}/>
        <button className='btn1' onClick={addItem}><AiOutlinePlus/></button>
        </div>
          {
            item.map((elem,ind) =>{
              return (
                <div className='added' key={ind}>
                <h3>{elem}<span className='deleteicon' onClick={()=>deleteItem(ind)}><AiFillDelete/></span></h3>
                
                </div>

              )
            })
          }
        <div>
        <button className='del' onClick={Removeall}>Remove All</button>
        </div>

        <p>{setName}</p>
    </div>
  )
}

export default Todo