import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Tasks from './pages/Tasks'
import Settings from './pages/Settings'
import Header from './components/Header'
import Sidebar from './components/sidebar'
import DashboardHome from './components/DashboardHome'


const App = () => {
  return (
    
    <BrowserRouter>
        <div className='flex'>
          <Sidebar />
          <div className='flex flex-col'>
            <div>
              <Header />
            </div>

            <div>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App