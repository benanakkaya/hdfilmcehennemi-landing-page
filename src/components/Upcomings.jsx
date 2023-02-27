import React from 'react';
import { AiFillPlaySquare } from "react-icons/ai"

export default function Upcomings() {


  const upcomings = [
    {
      id: 1,
      date: "02 Mart",
      title: "Creed III",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/creed-iii.jpg"
    },
    {
      id: 2,
      date: "10 Mart",
      title: "Inside",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/inside.jpg"
    },
    {
      id: 3,
      date: "10 Mart",
      title: "Çığlık 6",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/scream-6-2.jpg"
    },
    {
      id: 4,
      date: "17 Mart",
      title: "Shazam!",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/shazam-fury-of-the-gods.jpg"
    },
    {
      id: 5,
      date: "23 Mart",
      title: "John Wick 4",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/john-wick-chapter-4.jpg"
    },
    {
      id: 6,
      date: "24 Mart",
      title: "65",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/65-2.jpg"
    },
    {
      id: 7,
      date: "31 Mart",
      title: "Zindanlar ve Ejderhalar",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/evil-dead-rise.jpg"
    },
    {
      id: 8,
      date: "19 Nisan",
      title: "Creed III",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/dungeons-dragons-honor-among-thieves.jpg"
    },
    {
      id: 9,
      date: "03 Mayıs",
      title: "Galaksinin Koruyucuları 3",
      image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/guardians-of-the-galaxy-volume-3.jpg"
    }
  ]


  return (
    <div className='flex flex-col p-5 bg-gray2'>
      <div className='flex items-end'>
        <div className='flex items-center bg-dark rounded-t-lg p-2 text-sm font-bold text-white gap-1'><AiFillPlaySquare className="text-gray-300" /> Yakında Gelecek Filmler</div>
        <div className='border-b-2 border-solid flex items-center justify-end border-gray flex-1'>
          <a className='text-white font-bold hover:text-red-400 cursor-pointer text-sm'>Tüm Fragmanlar</a>
        </div>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-9 py-4 px-2 bg-dark'>
        {upcomings.map((mov) => (
          <div className='cursor-pointer group flex items-center justify-center flex-col gap-5'>
            <div className='p-2 group-hover:p-1 border-solid w-20 h-20 border-2 rounded-full group-hover:border-gray border-customRed flex flex-col items-center '>
              <img src={mov.image} alt={mov.id} className='w-16 h-16 rounded-full' />
              <span className='text-xs text-white p-half flex items-center justify-center group-hover:bg-gray bg-customRed rounded-lg'>{mov.date}</span>
            </div>
            <h4 className='text-sm text-white'>{mov.title.length > 15 ? `${mov.title.slice(0, 15)}...` : mov.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
