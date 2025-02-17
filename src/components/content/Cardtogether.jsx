import React from 'react'
import Card1 from './card1'
import Card2 from './Card2'
import user from '../../assets/150x150.png'
function Cardtogether() {
  return (
    <div className='flex rounded-2xl mt-3 ml-8 mr-8 max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-y-4 max-sm:pb-5'>
        <div className='w-1/4 bg-[#f1f0ea] rounded-2xl h-fit pb-4 max-sm:w-fit max-sm:pr-6 '><h1 className='ml-5 pt-4 font-medium text-2xl'>Upcoming Tests</h1><Card1 day="Mon" date="2" subject="General Math" name="Will Smith"></Card1><Card1 day="Mon" date="2" subject="General Math" name="Will Smith"></Card1><Card1 day="Mon" date="2" subject="General Math" name="Will Smith"></Card1></div>
        <div className='w-1/4 rounded-2xl ml-8 bg-[#30383f] max-sm:w-65 max-sm:h-69.5'><h3 className='text-white ml-5 pt-4 font-medium text-2xl'>Attendance</h3><h3 className='text-white ml-5 pt-4 font-medium text-2xl'>NULL</h3></div>
        <div className='w-1/4 bg-[#f4f1e9] rounded-2xl ml-8  max-sm:w-65 max-sm:h-69.5 max-sm:ml-0'><div className='flex justify-between'><h3 className='ml-5 pt-4 font-medium text-2xl'>Yearly Report</h3><p className='pt-5.5 text-gray-500 pr-5 font-medium text-1xl'>/2024</p></div>
        <div className='bg-white w-fit p-2 mt-30 ml-5 rounded-lg'><p><button>Download Report&nbsp;</button></p></div>
        </div>
        <div className='w-1/4 rounded-2xl ml-8 bg-[#eeb687]  max-sm:w-65 max-sm:h-69.5 max-sm:mt-0'>
        <h1 className='text-white ml-5 pt-4 text-6xl'>14</h1><p className='text-white ml-5 pt-2'>New sheets added per week</p><div className='w-fit bg-white ml-5 mt-3 rounded-lg p-1.5'><p>&nbsp;+2 Today&nbsp;</p>
        </div>
        <div className='flex mt-12 ml-5 border-t-2 pt-3 mr-5 border-gray-400  '>
            <img src={user} alt="user" className="w-10 h-10 rounded-full"></img>
            <img src={user} alt="user" className="w-10 h-10 rounded-full relative -left-3"></img>
            <img src={user} alt="user" className="w-10 h-10 rounded-full relative -left-6"></img>
            <p className='text-white mt-2 ml-10'>Join club <span className='text-lg'>→</span> </p>
        </div>
        
        </div>
    </div>
  )
}

export default Cardtogether