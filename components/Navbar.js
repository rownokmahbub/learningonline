import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex justify-between items-center ">
            <img src="/assets/logo.svg" alt="logo" />
            <div className="flex items-center gap-10">
                <p>Courses</p>
                <p>About Us</p>
                <p>Teacher</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blog</p>
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar