import React from 'react'
import user from '../../assets/150x150.png'
function Id(props) {
  return (
 <div className='flex pb-3'>
    <img src={user} width={49} className='rounded-4xl mr-3'/>
    <div className=''>
    <p className='font-medium'>{props.name}</p>
    <p className='font-medium'>A+ <span className='text-xs font-medium text-gray-700 relative -top-0.5'>({props.time} Times)</span></p></div>
 </div>
  )
}

export default Id