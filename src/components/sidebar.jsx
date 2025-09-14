 import React from 'react'
 import { Link } from 'react-router-dom'
 export default function Sidebar() {
    return (
      <div>

        <nav className="flex  flex-col  gap-10 w-60 h-[60rem]  text-black p-5 m-5 mr-0 rounded-lg  backdrop-blur-lg  bg-gray-100 backdrop-opacity-60000 shadow-4xl items-center">
            <img src="/cisco.svg" alt=""  className='w-[6rem] mb-[5rem]'/>
            <ul className="list-none flex flex-col gap-10 font-semibold">
                <div className='flex gap-3 x w-[rem] hover:translate-y-[-1px] transition-all duration-300 ease-in-out'>
                    <img src="/dash.svg" alt="" className='w-[1.7rem]'/>
                    <li>
                        <Link to="/dashboard" className="hover:text-black-300">Dashboard</Link>
                    </li>
                </div>

                <div className='flex gap-3 x w-[rem] hover:translate-y-[-1px] transition-all duration-300 ease-in-out'>
                    <img src="/activity.svg" alt="" />
                    <li>
                        <Link to="/tasks" className="hover:text-black-300">Tasks</Link>
                    </li>
                </div>


                <div className='flex gap-3 x w-[rem] hover:translate-y-[-1px] transition-all duration-300 ease-in-out'>
                    <img src="/trending-up.svg" alt="" />
                    <li>
                        <Link to="/analytics" className="hover:text-black-300">Analytics</Link>
                    </li>
                </div>
                <div className='flex gap-3 x w-[rem] hover:translate-y-[-1px] transition-all duration-300 ease-in-out'>
                    <img src="/settings.svg" alt="" />
                    <li>
                        <Link to="/settings" className="hover:text-black-300">Settings</Link>
                    </li>
                </div>
            </ul>
        </nav>

      </div>
    )
}