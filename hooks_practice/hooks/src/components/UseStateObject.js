import React from 'react'

const UseStateObject = () => {
    const [myObject ,setMyObject] =React.useState({
        myName:"hrititk" ,myAge:23,degree:"Btech"
    })

    const changeMyObject =()=>{
        setMyObject({...myObject,myName:"solemn",myAge:21})
        
    }
  return (
    <div>
        <h1 style={{textAlign:'center',paddingTop:200 }}>{myObject.myName}  & {myObject.degree} & my age {myObject.myAge} & dehradun</h1>
        <button style={{width:150,height:50 ,borderRadius:5 ,backgroundColor:"grey",color:"white"}} onClick={changeMyObject}>update</button>
 
    </div>
  )
}

export default UseStateObject