import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from "react-icons/fi"
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import {
  Ecommernce, Order, Kanban, Editor, Customers, Calendar, ColorPicker,
  Area, Bar, ColorMapping, Pyramid, Pie, Line, Stacked, Financial, Employee, ThemeSettings
} from './pages'
import { useStateContext } from './contexts/ContextProvider'

const App = () => {
  const { activeMenu } = useStateContext()

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ backgroundColor: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )
          }
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>
              <Routes>

                {/* Dashboard */}
                <Route path='/' element={<Ecommernce />} />
                <Route path='/ecommerce' element={<Ecommernce />} />
                <Route path='/order' element={<Order />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/financial' element={<Financial />} />

                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/area' element={<Area />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
                <Route path='/colorpicker' element={<ColorPicker />} />

              </Routes>
            </div>
          </div>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App