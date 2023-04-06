import React, { useEffect, useState } from 'react'
import GithubUser from './github/GithubUser';
import Loading from './github/Loading';



const UseEffectApi = () => {

    const [loading ,setLoading] =useState(false);
    const[user,setUser] =useState([]);


    
const getUser = async() =>{

    try {
       
        const res =await fetch("https://api.github.com/users");
        setLoading(false);
    // console.log(res)
    setUser(await res.json());

    }
    catch(error) {
        setLoading(false)
        console.log("my error" + error);
    }
}

useEffect(()=>{
    getUser();
},[])

if(loading) {
    return <Loading/>
}

  return (
 <GithubUser user={user}/>
  )
}

export default UseEffectApi