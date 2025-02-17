import React from 'react'
import './content.css'
import ChartExample from '../charts/bar'
import Id from '../props/Id'
function Content() {
  return (
    <div id='content' className='flex rounded-2xl mt-3 ml-8 mr-8 max-sm:flex-col'> 
        <div className='w-1/3 ml-5 pl-5 pt-4 pb-4 max-sm:border-b-2 '><h1 className='text-2xl font-normal max-sm:text-5xl'>Stay on top<br />of your competitors</h1>
        <div className="bg-white w-40 p-2 pt-2 rounded-md mt-3 max-sm:mt-5">
            <h4 className='inline font-medium pr-1.5 border-gray-200 border-r-2'>Student</h4>
            <input type="number" placeholder='user' className='ml-1 w-18.5 outline-none' />
        </div><br /><br /><br /><br />
        <h1 className='text-7xl inline max-sm:relative max-sm:-top-10'>A+</h1>
        <h1 className='ml-20 text-7xl inline max-sm:relative max-sm:-top-10'>82%</h1><br />
        <span className='mt-9 block text-gray-400 max-sm:mt-0'>Last updated: <p className='inline font-medium text-black'>November 30,2025</p></span>
        </div>
        <div className='w-1/3 bg-transparent h-max pt-4  pb-4 max-sm:ml-8 max-sm:border-b-2'><h1 className='text-2xl font-medium pb-2'>GPA Analytics:</h1><div className=''><ChartExample></ChartExample></div></div>
        <div className='w-1/3 pl-40 pt-7 max-sm:pl-0 max-sm:ml-9'><p className='text-2xl font-medium'>Best of school</p><p className='text-sm font-medium text-gray-600 pb-4'>This year by Grade</p>
        <Id name="Dianne Russel" time="4" ></Id><Id name="Dianne Russel" time="4" ></Id><Id name="Dianne Russel" time="4" ></Id><Id name="Dianne Russel" time="4" ></Id>
        </div>
    </div>
  )
}

export default Content