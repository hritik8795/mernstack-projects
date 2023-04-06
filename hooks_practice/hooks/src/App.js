import React,{useState} from "react"
// import './App.css';
// import Home from "./components/myApp/Home";
import Todo from "./components/todo/Todo";
// import Test from "./components/customhooks/Test";
// import CompA from "./components/usecontext/CompA";
// import UseReducer from "./components/usereducer/UseReducer";
// import Uncontrolled from "./components/form/Uncontrolled";
// import UseEffectApi from "./components/useEffecthooks/useEffectApi";
// import UseEffect2 from "./components/useEffecthooks/UseEffect2";
// import UseStateObject from "./components/UseStateObject";
// import UseStateArray from "./components/UseStateArray";
// import SortcircuitEval from "./components/SortcircuitEval";
// import Basicform from "./components/form/Basicform";
// import UseEffect1 from "./components/useEffecthooks/UseEffect1"
// import Alert from "../src/components/practice/Alert"


function App() {

  // const [myName,setmyName] =useState("helo how are you")

  // const ChangeName =()=>{
  //   if (myName==="helo how are you"){
  //     setmyName("dont call me i am react coms")

  //   }
  //   else{
  //     setmyName("helo how are you")
  //   }
    
  // }
  // console.log(myName)
  return (
    <div className="App">
      {/* <h3>{myName}</h3> */}
      {/* <button className="btn" onClick ={ChangeName}>click me </button> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      {/* <SortcircuitEval/> */}
      {/* <Basicform/> */}
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffectApi/> */}

      {/* <Uncontrolled/> */}
      {/* <UseReducer/> */}
      {/* <CompA/> */}

      {/* <Test/> */}
      {/* <Home/> */}
      <Todo/>
      {/* <Alert/> */}



    </div>
  );
}

export default App;
