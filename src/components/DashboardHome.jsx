import React from 'react'

const DashboardHome = () => {
  return (
    <div >
      <div className="  w-[95rem] h-[52rem] m-5 mt-1 p-5 rounded-lg  backdrop-blur-lg  bg-gray-100 backdrop-opacity-60000 shadow-4xl ">
        <h1 className='text-4xl font-bold m-5 p-5'>Welcome Back, Okoye Emeka</h1>
        
        {/* Summary Cards */}
        <div className='flex gap-5 m-5 p-5'>
          <div className='w-[20rem] h-[10rem] rounded-lg  backdrop-blur-lg  bg-white backdrop-opacity-60000 shadow-4xl p-5'>
              <h2 className='font-semibold text-lg'>Total Projects</h2>
              <p className='text-3xl font-bold mt-5'>24</p>
              <p className='text-green-500 mt-2'>+3 since last week</p>
          </div> 
          <div className='w-[20rem] h-[10rem] rounded-lg  backdrop-blur-lg  bg-white backdrop-opacity-60000 shadow-4xl p-5'>
              <h2 className='font-semibold text-lg'>Tasks Completed</h2>
              <p className='text-3xl font-bold mt-5'>128</p>
              <p className='text-green-500 mt-2'>+12 since last week</p>
          </div> 
          <div className='w-[20rem] h-[10rem] rounded-lg  backdrop-blur-lg  bg-white backdrop-opacity-60000 shadow-4xl p-5'>
              <h2 className='font-semibold text-lg'>New Messages</h2>
              <p className='text-3xl font-bold mt-5'>56</p>
              <p className='text-green-500 mt-2'>+8 since last week</p>
          </div> 
          <div className='w-[20rem] h-[10rem] rounded-lg  backdrop-blur-lg  bg-white backdrop-opacity-60000 shadow-4xl p-5'>
              <h2 className='font-semibold text-lg'>Pending Reviews</h2>
              <p className='text-3xl font-bold mt-5'>14</p>
              <p className='text-red-500 mt-2'>-2 since last week</p>
          </div>
        </div>

        {/*  Recent Activities */}
        <div className='m-5 p-5'>
          <h2 className='text-2xl font-bold mb-5'>Recent Activities</h2>
          <div className='w-[90rem] h-[15rem] rounded-lg  backdrop-blur-lg  bg-white backdrop-opacity-60000 shadow-4xl p-5 overflow-y-scroll'>
              <ul className='list-disc list-inside'>  
                  <li className='mb-2'>Completed the UI design for the new dashboard.</li>
                  <li className='mb-2'>Fixed bugs in the authentication module.</li>
                  <li className='mb-2'>Updated the project documentation.</li>
                  <li className='mb-2'>Reviewed pull requests from team members.</li>
                  <li className='mb-2'>Attended the weekly team meeting.</li>
                  <li className='mb-2'>Deployed the latest version to the staging environment.</li>
                  <li className='mb-2'>Conducted user testing for the new features.</li>
                  <li className='mb-2'>Collaborated with the marketing team on the product launch.</li>
              </ul>
          </div>
        </div>
      </div>

    

    </div>
  )
}

export default DashboardHome