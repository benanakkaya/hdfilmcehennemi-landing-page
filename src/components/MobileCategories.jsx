import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa"
import Sidebar from './Sidebar';

export default function MobileCategories() {

    const [categoryVisible, setCategoryVisible] = useState(false);

    return (
        <>
            <button onClick={() => setCategoryVisible(true)} className=' lg:hidden'><FaFilter /></button>
            {categoryVisible === true &&
                <div className="absolute top-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center z-20" >
                    <div onClick={() => setCategoryVisible(false)} className="fixed cursor-pointer inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-black opacity-75"></div>
                    </div>
                    <div className='z-20 w-full bg-dark text-white bg-primary absolute border-y-2 border-customRed min-h-screen top-0 left-0 flex flex-col justify-between gap-8 p-6'>
                        <div className='flex items-center justify-end'>
                            <svg onClick={() => setCategoryVisible(!categoryVisible)} className='cursor-pointer' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path className='fill-white' d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            }
        </>
    )
}
