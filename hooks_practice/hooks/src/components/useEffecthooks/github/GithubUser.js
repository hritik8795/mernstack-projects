import React from 'react'
import {FcApproval } from "react-icons/fc";

const GithubUser = ({user}) => {
    
    
  return (
    <>

<div>
        <h2 className='h1'>List of Picture</h2>
        <div className='containe-fluid mt-5'>
        <div className='row text-center'>

        {
            
           user.map((curElem)=>{
            {/* const { url ,id ,title } =curElem; */}//ye line likhne ke baad curelem nhi likna hota 
            return(
                <div>
                <div className='col-10 col-md-4 mt-5' key={curElem.login}>
        <div className='card p-2'>
            <div className="d-flex align-items-center">
            <div className ='image' >
                <img src={curElem.avatar_url} className='rounded' width='155'/>
            </div>
            <div className='ml-3 w-100'>

            <h4 className ='mb-0 mt-0 textleft ' style={{color:"blue"}}>{curElem.login}<FcApproval/></h4><span className='textleft'>{curElem.url}</span>
            <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                <div className='d-flex flex-column'><span className='followers'></span><span className='number2'>980</span></div>
                <div className='d-flex flex-column'><span className='rating'>Rating</span><span className="number3">8.9</span></div>
            </div>

            
            </div>


            </div>
        </div>

        </div>
        

       
                  
                </div>
            )

           }) 
        }
        
            
        </div>
        </div>

    </div>
    </>
  )
}

export default GithubUser