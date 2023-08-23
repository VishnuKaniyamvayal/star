import React, { useEffect, useState } from 'react'
import List from './List'
import db from  '../config/firestore'
import { collection, getDocs } from "firebase/firestore"; 
import Loader from './Loader';


const ListHolder = () => {
  const [tasks , setTasks] = useState([]);
  const [loading , setLoading]  = useState(true);

  const get_data = async()=>{
    const data = await getDocs(collection(db, "tasks"));
    const taskData = data.docs.map(doc => doc.data());
    setTasks(taskData);
    setLoading(false);
  }

  useEffect(()=>{
    get_data();
  },[])
  

  return (
    <>
    {
      loading &&
      <Loader/>
    } 
    <div className='flex justify-center flex-col mt-20  max-h-[70vh]  overflow-hidden items-center no-scrollbar'>
         <div className='max-h-full overflow-y-scroll space-y-5 no-scrollbar'>
        {tasks.map(( task , i )=>(<List title={task.taskName} key={i} status={task.taskStatus} description={task.taskDescription}/>))}
         </div>
    </div>
    </>
  )
}
export default ListHolder
