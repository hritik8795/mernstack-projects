import React,{useState} from 'react';
import './form.css'


const Basicform = () => {
  const [name,SetName] =useState("")
  const [password,SetPassword] =useState("")
  const [allEntry,SetAllEntry] =useState([])
//  const oneventChange =(e) =>{
//   console.log(e.target.value)
 //}

 const submitForm =(e)=>{
  e.preventDefault()

  if(name && password){
     // const newEntry ={id: new Date().getTime().toString(),name:name,password:password}
    const newEntry ={id: new Date().getTime().toString(),name,password}
  SetAllEntry([...allEntry,newEntry]);
  console.log(allEntry);
  SetName("");
  SetPassword("");

  }
  else{
    alert("fill the name and password")
  }
 
  

 }
  return (
    <>
    <form  onSubmit={submitForm} className='container'>
    <img className='userimg' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt ="userimg"/>
      <input type ="text"className ="Inputfeild1" name="name" id="name" value ={name} placeholder='enter the name' onChange={(e) =>SetName(e.target.value)}/>
      <input type="password"className ="Inputfeild2" name="password" id ="password" vlaue={password} placeholder='enter the password' onChange={(e) =>SetPassword(e.target.value)}/>
      <button className="btn">Save</button>
    </form>

    <div>
      {
        allEntry.map((curelem) =>{
          const {id, name,password} =curelem;
          return (
            <div className='ArrData' key ={id}>
              <p> {name}</p>
              <p>{password}</p>
            </div>
          ) 
        })
      }
    </div>

    </>
  )
}

export default Basicform