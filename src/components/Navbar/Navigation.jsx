import React from 'react'
import user from '../../assets/150x150.png'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
function Navigation() {
    const navigate=useNavigate();
  return (
    <div className='flex flex-row justify-between ml-8 mr-8'>
        <nav className='flex items-center'>
            <img src={user} width={70} className='rounded-full' />
            <div className='flex max-sm:'>
            <ol onClick={()=>{navigate('/student-dashboard/')}}  className='ml-5.5 bg-black text-white p-1.5 rounded-b-lg rounded-l-lg rounded-r-lg'><button>Dashboard</button></ol>
            <ol onClick={()=>{navigate('/student-dashboard/activity')}} className='ml-5.5 bg-black text-white p-1.5 rounded-b-lg rounded-l-lg rounded-r-lg'><button>Activity</button></ol>
            <ol onClick={()=>{navigate('/student-dashboard/teachers')}} className='ml-5.5 bg-black text-white p-1.5 rounded-b-lg rounded-l-lg rounded-r-lg'><button>Teachers</button></ol>
            <ol onClick={()=>{navigate('/student-dashboard/events')}} className='ml-5.5 bg-black text-white p-1.5 rounded-b-lg rounded-l-lg rounded-r-lg'> <button>Events</button></ol>
            <ol onClick={()=>{navigate('/student-dashboard/payments')}} className='ml-5.5 bg-black text-white p-1.5 rounded-b-lg rounded-l-lg rounded-r-lg'><button>Payments</button></ol></div>
        </nav>
        <div className='flex items-center max-sm:hidden'>
            <ol className='mr-4.5'><FontAwesomeIcon icon={faBell}  className='text-lg' /></ol>
            <img src={user} width={50} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Navigation