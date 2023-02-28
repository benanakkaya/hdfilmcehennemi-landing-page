import React, { useState } from 'react'
import { AiOutlineMenu, AiFillLock } from "react-icons/ai"
import { MdArrowDropDown } from "react-icons/md"

export default function MobileNav() {

    const [navVisible, setNavVisible] = useState(false);

    const [collapseList, setCollapseList] = useState(false);

    return (
        <>
            <button onClick={() => setNavVisible(!navVisible)} className=' lg:hidden'><AiOutlineMenu /></button>
            {navVisible === true &&
                <div className="absolute top-16 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center z-20" >
                    <div className='z-20 w-full bg-dark text-white bg-primary absolute border-y-2 border-customRed top-0 left-0 flex flex-col gap-8 p-6'>

                        <ul className='w-full flex flex-col items-center gap-4 font-bold text-sm'>
                            <li className=''>
                                <a href='/#'>Ana Sayfa</a>
                            </li>
                            <li>
                                <a href='/#'>Filmler</a>
                            </li>
                            <li>
                                <a href='/#'>Diziler</a>
                            </li>
                            <li onClick={() => setCollapseList(!collapseList)} className='w-full gap-2 flex flex-col h-full items-center justify-center '>
                                <button className='flex items-center'>Yapım Yılı <MdArrowDropDown /></button>
                                {collapseList === true &&
                                    <ul className='z-10 w-full bg-gray group-hover:flex flex-col py-1 rounded-lg'>
                                        <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2023</a></li>
                                        <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2022</a></li>
                                        <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2021</a></li>
                                        <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2020</a></li>
                                        <li className='hover:bg-lightGray py-1 px-2 cursor-pointer'><a href='/#'>2019</a></li>
                                    </ul>
                                }
                            </li>
                            <li>
                                <a href='/#'>Seri Filmler</a>
                            </li>
                        </ul>

                        <input type="text" className="w-full py-1 px-3 text-sm text-veryDark rounded-full" placeholder="Film veya Dizi Ara" />
                        <div className='flex items-center gap-3 justify-center text-sm'>
                            <button className='p-1'>Kayıt Ol</button>
                            <button className='p-1 hover:bg-darkRed bg-customRed flex items-center gap-1 rounded-xl'><AiFillLock /> Giriş Yap</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
