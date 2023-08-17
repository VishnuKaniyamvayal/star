import React, { useState } from 'react'
import { TbProgress } from 'react-icons/tb';
import { TbProgressCheck } from 'react-icons/tb';
import { TbProgressAlert } from 'react-icons/tb';
import { motion } from "framer-motion";

const List = ({ status , title , description }) => {
  const [ textarea , setTextarea ]  =  useState(false);

  const handleChild = ()=>{

    setTextarea(!textarea);
  };

  return (
    <motion.div 
    initial={{ scale: 0 }}
    animate={{ rotate: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 10
    }}
    >
    <div onClick={handleChild} className='h-10 bg-secondary max-w-[600px] min-w-[400px] rounded-md px-4 flex items-center justify-between shadow-md'>
        <h5 className='text-white font-semibold truncate'>{title}</h5>
        <div className=''>
            {status === 'inProgress' && <TbProgress className='text-white' title='in Progress'></TbProgress>}
            {status === 'completed' && <TbProgressCheck className='text-white' title='Completed'></TbProgressCheck>}
            {status === 'completedInLocal' && <TbProgressAlert className='text-white' title='Completed in local'></TbProgressAlert>}
        </div>
    </div>
    { textarea &&
      <div className=''>
      <textarea name="" id="" cols="42" rows="">
      {description}
      </textarea>
    </div>
    }
    </motion.div>
  )
}

export default List