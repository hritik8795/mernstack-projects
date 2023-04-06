import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location =useLocation()
  console.log(location);
  return (
    <div>
      hllo everyone welcome to the {location.pathname.replace("/"," ")}
    </div>
  )
}

export default About