import React from 'react'
import Navigation from '../Navbar/Navigation'
import Content from '../content/Content'
import Cardtogether from '../content/Cardtogether'
import {Routes,Route} from 'react-router-dom'
import Activity from '../pages/Activity'
import Teachers from '../pages/Teachers'
import Payments from '../pages/Payments'
import Events from '../pages/Events'
function Layout() {
  return (
    <div className='max-sm:overflow-y-scroll max-sm:overflow-x-hidden '>
    
    <Navigation></Navigation>
    <Routes>
        <Route path='/student-dashboard/' element={<><Content></Content><Cardtogether></Cardtogether></>}></Route>
        <Route path='/student-dashboard/activity' element={<Activity></Activity>}  ></Route>
        <Route path='/student-dashboard/teachers' element={<Teachers></Teachers>} ></Route>
        <Route path='/student-dashboard/events' element={<Events></Events>} ></Route>
        <Route path='/student-dashboard/payments' element={<Payments></Payments>} ></Route>
    </Routes>
    </div>
  )
}

export default Layout