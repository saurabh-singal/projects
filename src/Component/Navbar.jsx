import React from 'react'

const Navbar = () => {
    return(
        <>
            <nav className='flex justify-around bg-violet-700 text-white py-2'>
                <div className="logo">
                    <span className='font-bold text-xl mx-9'>ITask</span>
                </div>
                
                <ul className='flex mx-9 gap-8'>
                    <li className='cursor-pointer hover:font-bold'>Home</li>
                    <li className='cursor-pointer hover:font-bold'>Your Task</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar