import React from 'react'
import { TbProgress } from 'react-icons/tb';
import { TbProgressCheck } from 'react-icons/tb';
import { TbProgressAlert } from 'react-icons/tb';


const List = ({status}) => {
  return (
    <div className='h-10 bg-secondary max-w-[600px] min-w-[400px] rounded-md px-4 flex items-center justify-between shadow-md'>
        <h5 className='text-white font-semibold truncate'>Task short description will be written here</h5>
        <div className=''>
            {status === 'inProgress' && <TbProgress className='text-white' title='in Progress'></TbProgress>}
            {status === 'completed' && <TbProgressCheck className='text-white' title='Completed'></TbProgressCheck>}
            {status === 'completedInLocal' && <TbProgressAlert className='text-white' title='Completed in local'></TbProgressAlert>}
        </div>
    </div>
  )
}

export default List