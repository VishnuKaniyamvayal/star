import React, { useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'

const Loader = () => {
  return (
<div className='w-full flex items-center justify-center'>
{

 <MutatingDots 
 height="100"
 width="100"
 color="#5674FF"
 secondaryColor= '#5674FF'
 radius='12.5'
 ariaLabel="mutating-dots-loading"
 wrapperStyle={{}}
 wrapperClass=""
 visible={true}
 />
}
  </div>
  )
}

export default Loader