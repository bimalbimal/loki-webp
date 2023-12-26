import React, { useState } from 'react'
import './Totainfo.css';

function Totainfo() {

  const [click,setClick] = useState(false)
  const handleclick = ()=>{
    setClick(!click);

  }
  const [clicki,setClicki] = useState(false)
  const handleclicki = ()=>{
    setClicki(!clicki);

  }
  const [clickii,setClickii] = useState(false)
  const handleclickii = ()=>{
    setClickii(!clickii);

  }
  const [clicku,setClicku] = useState(false)
  const handleclicku = ()=>{
    setClicku(!clicku);

  }
  const [clickuu,setClickuu] = useState(false)
  const handleclickuu = ()=>{
    setClickuu(!clickuu);

  }
  const [clickuuu,setClickuuu] = useState(false)
  const handleclickuuu = ()=>{
    setClickuuu(!clickuuu);

  }
   
   
   
   
   
     
   
  return (
    <div className='totalinfo'>
      <div className='nui'>
      <button onClick={handleclick}>hai</button>
       {click&& (<p>hai man</p>)}
       <button onClick={handleclicki}>hai</button>
       {clicki&& (<p>fuck you</p>)}
       <button onClick={handleclickii}>hai</button>
       {clickii&& (<p>fuck you</p>)}
       <button onClick={handleclicku}>hai</button>
       {clicku&& (<p>fuck you</p>)}
       <button onClick={handleclickuu}>hai</button>
       {clickuu&& (<p>fuck you</p>)}
       <button onClick={handleclickuuu}>hai</button>
       {clickuuu&& (<p>fuck you</p>)}
        

      </div>


       



      


      
      
      

      
         


    </div>
  )
}

export default Totainfo