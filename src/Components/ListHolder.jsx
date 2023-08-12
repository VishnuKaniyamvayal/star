import React from 'react'
import List from './List'

const ListHolder = () => {
  return (
    <div className='flex justify-center flex-col mt-20  max-h-[80%] items-center overflow-hidden'>
        {/* flex justify-center flex-col mt-20 space-y-5 max-h-  */}
         <div className='max-h-full overflow-y-scroll  space-y-5'>
        <List status='inProgress'/>
        <List status='inProgress'/>
        <List status='inProgress'/>
        <List status='inProgress'/>
        <List status='inProgress'/>
        <List status='inProgress'/>
        <List status='inProgress'/>
        <List status='inProgress'/>
         </div>
    </div>
  )
}
export default ListHolder
