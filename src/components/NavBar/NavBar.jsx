import React from 'react'
import Logo from "../../assets/logo.png";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { useState } from 'react';   
import { useEffect } from 'react';
import { data } from 'autoprefixer';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 3,
        name: "Mens Wear",
        link: "/#",
    },
]

const DropdownLinks = [
    {
        id: 1,  
        name: "Trending",
        link: "/#",
    },
    {
        id: 2,
        name: "Latest",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#", 
    },
    {
        id: 4,
        name: "Best Sellers",
        link: "/#",
    }
]     
    

const NavBar = ({ handlerOrderPopup }) => {
  return (
    <div>
        {/* Upper Nav */}
        <div className='shadow-md bg-white dark:bg-gray-800 
        dark:text-white duration-200 relative z-40'> 
            <div className='bg-primary py-2 '>
                <div className='container flex justify-between items-center py-4'> 
                    <a href="#"
                    className='font-bold text-2xl sm:text-3xl flex gap-2'
                    >
                        <img src={Logo } alt="Logo" className='w-10 uppercase' />
                        Shopsy
                    </a>
                    {/* search bar and order button */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='group relative hidden sm:block'>
                            <input type="text" placeholder='search' className='w-[200px] 
                            sm:w-[200px] group-hover:w-[300px] 
                            transition-all duration-300
                             rounded-full border
                              border-gray-300
                            px-2 py-1 focus:outline-none
                             focus:border-2 focus:border-primary
                             dark:border-gray-500 dark:bg-gray-800'/>
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 '/>
                        </div>
                    </div>
                    {/* order button */}
                    <button onClick={() => handlerOrderPopup()}
                        className='bg-gradient-to-r
                         from-primary to-secondary
                          transition-all duration-300
                           text-white py-1
                        px-4 rounded-full flex 
                        items-center gap-3 group'
                        
                         >
                        <span className='group-hover:block hidden transition-all duration-300'>
                            Order
                        </span>
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>
                    {/* dark switch */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        {/* Lower Nav */}
        <div className='flex justify-center bg-white dark:bg-gray-800
         dark:text-white duration-200'> 
            <ul className='sm:flex hidden items-center gap-4'>
            {  Menu.map((data) => (
                    <li key={data.id}>
                        <a href={data.link} className='inline-block px-4                        
                        hover:text-primary duration-200'>
                            
                            {data.name}</a>
                    </li>
                ))
            }
            {/* Simple dropdown and links */}
            <li className='group relative cursor-pointer'>
                <a href="#"
                 className="flex items-center gap-[2px ]
                 py-2
                 ">
                    Trending Products
                    <span>
                        <FaCaretDown 
                        className="transition-all duration-200
                            group-hover:rotate-180"
                        />
                    </span>
                </a>
                <div className='absolute z-[9999] hidden 
                group-hover:block w-[150px] rounded-md bg-white p-2
                text-black shadow-md
                '>
                    <ul>
                        {DropdownLinks.map( (data) => (
                            <li key={data.id}>
                                <a href={data.link} className='inline-block w-full 
                                rounded-md p-2
                                   hover:bg-primary/20 duration-200'>
                                    {data.name}
                                </a>
                            </li>
                        ))} 
                    </ul>
                </div>
            </li>
            </ul>
        </div>
    </div>
  )

}

export default NavBar