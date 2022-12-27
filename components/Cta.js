import React from 'react'

const Cta = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>
            <p className='text-4xl font-medium text-center'>Get a free trial lesson today</p>
            <p className='text-2xl font-medium text-center'>Start fulfilling your language dreams with our school</p>
            <div className="flex gap-10 items-center mt-5">
                <input type="text" className='px-5 py-5 rounded-full w-96 outline-none bg-[#f8fafe]' placeholder='enter a email' />
                <button className='btn bg-[#524fd5] btn-lg rounded-full border-none'>Send</button>
            </div>
    </div>
  )
}

export default Cta