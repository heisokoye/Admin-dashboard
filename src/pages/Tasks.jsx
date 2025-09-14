import React from 'react'

const Tasks = () => {
  return (
    <div className='  w-[95rem] h-[52rem] m-5 mt-1 p-5 rounded-lg  backdrop-blur-lg  bg-gray-100 backdrop-opacity-60000 shadow-4xl '>
      <h1 className='text-4xl font-bold m-5 p-5'>Tasks Page</h1>
      <p className='m-5 p-5 text-lg'>This is the Tasks page where you can manage your tasks and to-dos.</p>
      <div className='m-5 p-5'>
        <h2 className='text-2xl font-bold mb-5'>Task List</h2>
        <div className='w-[90rem] h-[40rem] rounded-lg  backdrop-blur-lg  bg-white backdrop-opacity-60000 shadow-4xl p-5 overflow-y-scroll'>
            <ul className='list-disc list-inside'>  
                <li className='mb-2'>Task 1: Complete the project documentation.</li>
                <li className='mb-2'>Task 2: Review the pull requests from team members.</li>
                <li className='mb-2'>Task 3: Attend the weekly team meeting.</li>
                <li className='mb-2'>Task 4: Deploy the latest version to the staging environment.</li>
                <li className='mb-2'>Task 5: Conduct user testing for the new features.</li>
                <li className='mb-2'>Task 6: Collaborate with the marketing team on the product launch.</li>
                <li className='mb-2'>Task 7: Fix bugs in the authentication module.</li>
                <li className='mb-2'>Task 8: Update the project roadmap and timelines
                </li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Tasks