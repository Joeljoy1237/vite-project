import React, { useState } from 'react';

const Nav = () => {

  const [toggleDrop, setToggleDrop] = useState(false);

  const toggleHandle=() => {
    setToggleDrop(!toggleDrop);
  }
  return (
    <nav className='flex justify-between items-center mb-16 pt-12 px-16'>
      <div className='flex gap-2 text-lg'>SANTHOSH BAKE HOUSE</div>

      <div className='hidden lg:flex justify-between items-center text-gray-300'>
        <div className='flex px-3'>About</div>
        <div className='flex px-3'>Shop info</div>
        <div className='flex px-3'>Menu</div>
      </div>

      <div className='hidden lg:flex justify-between items-center text-gray-300'>
        <div className='flex px-3'>Location</div>
        <div className='flex px-3'>Facebook</div>
        <div className='flex px-3'>Instagram</div>
      </div>

      <div className='lg:hidden flex'>
        <div className='dropdown'>
          <img className='inline w-7 h-7 m-1 btn cursor-pointer' onClick={toggleHandle} src='/icon.png' alt='Dropdown' />
          {toggleDrop && (

<ul className=" absolute right-2 shadow menu dropdown-content z-[1] rounded-box w-52 text-gray-700 dark:text-gray-200">
<li>
  <a href="#" className="block px-4 w-40 py-2 bg-gray-900 hover:bg-gray-600 hover:text-white">About</a>
</li>
<li>
  <a href="#" className="block px-4 w-40 py-2 bg-gray-900 hover:bg-gray-600 hover:text-white">Shop Info</a>
</li>
<li>
  <a href="#" className="block px-4 w-40 py-2 bg-gray-900 hover:bg-gray-600 hover:text-white">Menu</a>
</li>
<li>
  <a href="#" className="block px-4 w-40 py-2 bg-gray-900 hover:bg-gray-600 hover:text-white">Location</a>
</li>
<li>
  <a href="#" className="block px-4 w-40 py-2 bg-gray-900 hover:bg-gray-600 hover:text-white">Instagram</a>
</li>
</ul>

          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
