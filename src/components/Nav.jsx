import React from 'react'

const Nav = () => {
  return (
      <nav className='flex justify-between item-center mb-16 pt-12 px-16'>
          <div className='flex gap-2 text-lg'>SANTHOSH BAKE HOUSE</div>

          <div className='flex justify-between items-center text-gray-300'>
              <div className='flex px-3'>About</div>
              <div className='flex px-3'>Shop info</div>
              <div className='flex px-3'>Menu</div>
          </div>
          <div className='flex justify-between items-center text-gray-300'>
              <div className='flex px-3'>Location</div>
              <div className='flex px-3'>Facebook</div>
              <div className='flex px-3'>Instagram</div>
          </div>
    </nav>
  )
}

export default Nav