import React from 'react';
import { FaFilter, FaHome } from "react-icons/fa"
import { MdArrowDropDown } from "react-icons/md"
import { AiFillLock, AiOutlineMenu } from "react-icons/ai"

export default function Navbar() {
    return (
        <div className='lg:p-0 px-4 bg-dark text-white flex items-center justify-between lg:rounded-t-xl gap-4 border-b-2 border-solid border-customRed'>
            <button className=' lg:hidden'><AiOutlineMenu /></button>
            <img className='h-16 lg:h-full' src='https://www.hdfilmcehennemi.life/assets/front/img/logo-hdf.png' alt="logo" />
            <div className='hidden lg:flex items-center px-2 flex-1 justify-between gap-6'>
                <ul className='h-8 flex items-center gap-4 font-bold text-sm'>
                    <li className='h-10 w-10 cursor-pointer text-xl flex items-center justify-center rounded-full bg-customRed'>
                        <a href='/#'><FaHome /></a>
                    </li>
                    <li>
                        <a href='/#'>Filmler</a>
                    </li>
                    <li>
                        <a href='/#'>Diziler</a>
                    </li>
                    <li className='group flex h-full items-center flex-col justify-center relative'>
                        <a href='/#' className='flex items-center'>Yapım Yılı <MdArrowDropDown /></a>
                        <ul className='z-10 absolute top-8 left-0 bg-gray hidden group-hover:flex flex-col w-32 py-1 rounded-lg'>
                            <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2023</a></li>
                            <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2022</a></li>
                            <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2021</a></li>
                            <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2020</a></li>
                            <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2019</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='/#'>Seri Filmler</a>
                    </li>
                </ul>
                <div className='hidden xl:block' >
                    <input type="text" className="outline-none rounded-lg text-dark text-sm px-2 py-1" placeholder='Film veya Dizi Ara' />
                </div>
                <div className='flex items-center justify-center gap-4 text-sm'>
                    <button className='p-1'>Kayıt Ol</button>
                    <button className='p-2 hover:bg-darkRed bg-customRed flex items-center gap-1 rounded-xl'><AiFillLock /> Giriş Yap</button>
                </div>
            </div>
            <button className=' lg:hidden'><FaFilter /></button>
        </div>
    )
}
