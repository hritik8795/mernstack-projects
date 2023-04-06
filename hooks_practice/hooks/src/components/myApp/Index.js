import React from 'react'
import { useLocation} from 'react-router-dom';


const Index = () => {
    const location =useLocation();
    console.log(location);
  return (
    <div>
        <h1>hello {location.pathname.replace("/",'')} page</h1>
        {
          location.pathname === '/about/hell' ?
          <p>hell hell bad to see you </p>  :
          <p>Login to see youur self</p>
         
        }
        <button style={{width:100,height:40}}>Go Back</button>
    </div>
  )
}

export default Index