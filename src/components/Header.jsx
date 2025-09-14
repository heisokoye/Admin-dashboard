import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="  flex justify-between items-center p-5 m-5 rounded-lg  backdrop-blur-lg backdrop-opacity-60000 shadow-xl w-[95rem] bg-gray-100 h-25 ">
            <div className=' relative w-[30rem] bg-white p-[1rem] rounded-4xl flex items-center gap-3'>
                <input type="text" placeholder='Looking for something?' className='w-[25rem] border-none outline-none font-semibold focus:outline-none '/>
                <img src="/search.svg" alt="" className='w-[1.15rem] absolute right-8 cursor-pointer hover:translate-y-[-1px] transition-all duration-300 ease-in-out '/>
            </div>

            <div className='flex justify-center items-center gap-5'>
               <div className='w-[3rem] bg-white p-3 rounded-full cursor-pointer hover:bg-gray-300 hover:translate-y-[-1px] transition-all duration-300 ease-in-out'><img src="/mail.svg" alt="" /></div>  
               <div className='w-[3rem] bg-white p-3 rounded-full cursor-pointer hover:bg-gray-300 hover:translate-y-[-1px] transition-all duration-300 ease-in-out'><img src="/bell.svg" alt="" /></div>  
               <div className='flex gap-4 bg-gray-300 p-2 rounded-full items-center cursor-pointer hover:bg-white hover:translate-y-[-1px] transition-all duration-300 ease-in-out'>
                    <img src="image.png" alt=""  className='w-[3rem] rounded-full'/>
                    <div className='pr-[.5rem]'>
                        <p className='font-semibold'>Okoye Emeka</p>
                        <p className='text-gray-700 text-sm'>Admin</p>
                    </div>
               </div>

            </div>
            
        </header>
    </div>
  )
}

export default Header