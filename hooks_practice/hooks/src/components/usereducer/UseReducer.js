// use reducer is same as useState
//use reducer take two function reducer,initialState
//reducers are pure functions(no side effect) that take in a state and action and return a new state
import React, { useReducer } from 'react'

const initialstate=0;
const reducer =(state,action) =>{
    console.log(state,action);
    if(action.type ==="INCREMENT"){
      return state+1;
    }
    else{
      return state-1;
    }
   


}

const UseReducer = () => {

    const[state,dispatch] =useReducer(reducer,initialstate)
  return (
    <>     
    <div>
    <p>{state}</p>
    <div className='bnt'>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
    <button onClick={()=>dispatch({type:"DECREMEN" })}>DEC</button>
    </div>
    </div>
    </>
  )
}

export default UseReducer
