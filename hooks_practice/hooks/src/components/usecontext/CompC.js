import React,{useContext} from 'react'
import { BioData } from './CompA'

const CompC = ({name}) => {
    const channelname = useContext(BioData);
  return (
    <div style={{color:"black"}}>hello component c<span  style={{color:'blue'}}> {channelname} </span></div>
  )
}

export default CompC