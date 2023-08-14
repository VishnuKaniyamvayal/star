import React from 'react'

const AddTask = () => {
  return (
    <div className='flex justify-center mt-5'>
        <div className='flex bg-secondary rounded'>
            <input type="text" className='bg-secondary shadow appearance-none rounded max-w-[900px] min-w-[600px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent h-18' name='message' id='message'/>
            <button type="submit" className='text-white font-bold px-4 rounded'>Add</button>
        </div>
    </div>
  )
}

export default AddTask