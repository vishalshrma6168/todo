import React, { useState } from 'react'
import NavBar from '../../components/Layout/NavBar'
import PopUpModel from '../../components/PopUpModel'
function Home() {
  const[showModel ,setShowModel] =useState(false)
  const [title,setTitle]=useState("")
  const [description ,setdescription]=useState("")
  const openHandler =()=>{
    setShowModel(true)
  }
  return (
   <>
    <div className="con">
    <div className='add-task'>
    <h1>your task</h1>
    <input  type='search' placeholder='search your task'/>
    <button  onClick={openHandler}>create task</button>

    </div>
    <h1>{title}</h1>
    <h1>{description}</h1>
<PopUpModel showModel={showModel}
  setShowModel={setShowModel}
  title={title}
  setTitle={setTitle}
  description ={description}
setdescription={setdescription}

/>
    </div>
   </>
  )
}

export default Home