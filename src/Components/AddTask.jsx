import React, { useState } from 'react'
import db from '../config/firestore'
import { addDoc, collection, doc } from "firebase/firestore" 

const AddTask = () => {
  const [ textarea , setTextarea ]  =  useState(false);
  const [ taskName , setTaskName ]  =  useState('');
  const [ taskDescription , setTaskDescription ]  =  useState('');
  const [ taskStatus , setTaskStatus ]  =  useState('');
  
  const handleChild = ()=>{
    setTextarea(!textarea);
  };
  const docref = doc(collection(db, 'tasks'));
  const addTask = async()=>{
    await addDoc(docref, {
      'taskName':taskName,
      'taskDescription':taskDescription,
      'taskStatus':taskStatus
    });

  }


  return (
    <div className='flex justify-center mt-5 flex-col'>
        <div className='flex bg-secondary rounded'>
            <input onKeyDown={(e)=>{setTaskName(e.target.value);}} onClick={handleChild} type="text" className='bg-secondary shadow appearance-none rounded max-w-[900px] min-w-[600px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent h-18' name='message' id='message'/>
            <button type="submit" onClick={addTask} className='text-white font-bold px-4 rounded'>Add</button>
        </div>
        { textarea &&
      <div className=''>
      <textarea onKeyDown={(e)=>{setTaskDescription(e.target.value);}} name="" id="" cols="42" rows="">
      </textarea>
      </div>
      
        }
        {
          textarea &&
          <select onChange={(e)=>{setTaskStatus(e.target.value)}} name="progress" id="lang">
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="completedInLocal">Completed in Local</option>
        </select>
        }
    </div>
  )
}

export default AddTask