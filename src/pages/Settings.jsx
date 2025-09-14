import React from 'react'

const Settings = () => {
  return (
    <div className='  w-[95rem] h-[52rem] m-5 mt-1 p-5 rounded-lg  backdrop-blur-lg  bg-gray-100 backdrop-opacity-60000 shadow-4xl '>
      <h1 className='text-4xl font-bold m-5 p-5'>Settings Page</h1>
      <p className='m-5 p-5 text-lg'>This is the Settings page where you can adjust your preferences and configurations.</p>
      <div className='m-5 p-5'> 
        <h2 className='text-2xl font-bold mb-5'>Settings</h2>
        <div className='w-[90rem] h-[40rem] rounded-lg  backdrop-blur-lg  bg-white backdrop-opacity-60000 shadow-4xl p-5 overflow-y-scroll'>
            <p className='text-lg'>Settings content goes here. You can add forms and options to customize the application according to user preferences.</p>
        </div>
      </div>

    </div>
  )
}

export default Settings