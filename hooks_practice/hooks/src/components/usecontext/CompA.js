// es code me hum maily usecontext hooks padhenge eska kaam hota hai propdrilling se bachanana
// agar hamare pass 3 coonent hai to hume props pahle A me se B me fir B me se C me bhejna padta tha
//but use context hooks ka estemaal karne se hum A se C me seedha  props bhej sakte hai  (const var .provider )laga ke 

import React, { createContext } from 'react'
import CompB from './CompB'

const BioData =createContext();

 

const CompA = () => {
  return (
    <div>
    <BioData.Provider value ={"hritik shukla "}>
    <CompB/>
    </BioData.Provider>
      
    </div>
  )
}

export default CompA
export {BioData};
//hume biodata ko export krna hoga 

//context api 
//context api ka use hota hai propdrilling ko overcome karne ke liye
//context -"context api"
//provider 
//consumer - too lengthy -- aur isi ko reduce karke use Context aaya 

//context Api and use Context is different 

//pop drilling -tha jisme jo component A se C me props pass karna ho to us props ko b me bhi pass karna hota tha
