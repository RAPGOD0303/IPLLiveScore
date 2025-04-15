import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Menu, X} from 'lucide-react';
export default function HEader() {
    const [isOpen, setOpen] = useState(false);
    const link = [
        {name:'Live Score', path:"/live-score"},
        {name:'Schedule', path:"/schedule"},
        {name:'Teams', path:"/teams"},
        {name:'Stats', path:"/stats"},
        {name:'News', path:"/news"}
    ];

    const toggleMenu=() =>{
        setOpen(!isOpen);
    }

  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4'>
        {/* logo */}
        <div className='flex items-center justify-between h-[20px]'>
        <Link to='/' className='flex items-center space-x-2'>
        <div className='h-[25px] w-[25px] bg-orange-300 rounded-full flex-item'>
        <span className='text-sm text-white font-bold'>IPL</span>
        </div>
        <span className='text-black font-bold text-lg p-2 m-2 '>Score Tracker</span>
        </Link>

        {/* desktop size */}
        <div className='hidden md:flex space-x-6'>
            {link.map((link, index) =>(
                <Link to={link.path} key={index} className={`text-sm font-medium trasition-colors hover:text-orange-600`} >{link.name}</Link>
            ))}
        </div>

        {/* mobile size */}
        <button className='md:hidden p-2 rounded-md text-grey-700 hover:bg-gray-100' onClick={toggleMenu}>
            {isOpen ? <X size={15}/> : <Menu size={15}/>}
        </button>
        </div>
        {/* Mobile NavLink */}
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            <div className='flex flex-col space-y-4'>
              {link.map((link, index) =>(
                <Link to={link.path} key={index} className={`text-sm font-medium trasition-colors hover:text-orange-600`} >{link.name}</Link>
              ))}
            </div>
            </div>
        )}
      </div>
    </div>
  );
}
