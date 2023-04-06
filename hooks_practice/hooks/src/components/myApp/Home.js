import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import About from './About';
import Index from './Index';
// import { useLocation } from 'react-router-dom';

const Home = () => {
    // const location =useLocation();
    // console.log(location);
  return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/index" element ={<Index/>}></Route>
</Routes>

</BrowserRouter>
  )
}

export default Home