import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import { motion } from "framer-motion"


function Card(props) {
  const [editNote,setEditNote]=useState(true);
  function handleClick(){
    props.onDelete(props.id);
  }
  function onChangeHandler(event){
    props.onChange(event.target.value,props.id)
  }
  function edit() {
    setEditNote(!editNote)
  }
  return (
    <motion.div drag 
    dragConstraints={props.refer} 
    whileDrag={{scale:1.2}}
    dragTransition={{bounceDamping:50}}  
    className='relative flex-shrink-0 w-60 h-80 rounded-[50px] bg-zinc-900/90 text-white p-5'>
   <header onClick={edit} className='absolute top-5 right-5 text-[20px]'> 

   {editNote===true ? <MdModeEdit/>:<MdOutlineDone/>}
   
    </header> 
    {editNote===true ? <textarea maxLength={200} onChange={onChangeHandler} className='w-[100%] h-[80%] mt-[20%] bg-transparent' placeholder='Take a Note...' spellCheck="false" readOnly />:
    <textarea maxLength={200} onChange={onChangeHandler} className='w-[100%] h-[80%] mt-[20%] bg-transparent' placeholder='Take a Note...' spellCheck="false"  />

}
       
        <div onClick={handleClick} className='absolute right-5 text-[20px] bottom-3'>
        <MdDelete/></div>
    </motion.div>
  )
}

export default Card