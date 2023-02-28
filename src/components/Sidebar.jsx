import React from 'react';
import { FaRobot } from "react-icons/fa"
import { BiCommentAdd, BiCaptions } from "react-icons/bi"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { BsHeadphones } from "react-icons/bs"
import { CgMenuGridR } from "react-icons/cg"
import { GiStarShuriken } from "react-icons/gi"
import { MdMonitor } from "react-icons/md"

export default function Sidebar() {

    const firstOnTheNet = [
        {
            id: 1,
            title: "The Point Men",
            info: "Türkçe Altyazılı",
            rating: "6.3",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-point-men.jpg"
        },
        {
            id: 2,
            title: "Cocaine Bear",
            info: "Türkçe Altyazılı",
            rating: "6.5",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/cocaine-bear.jpg"
        },
        {
            id: 3,
            title: "Kulübüye Tıklat",
            info: "Türkçe Altyazılı",
            rating: "6.2",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/knock-at-the-cabin.jpg"
        },
        {
            id: 4,
            title: "Üç Bin Yıllık Bekleyiş",
            info: "Dublaj & Altyazılı",
            rating: "6.7",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/three-thousand-years-of-longing.jpg"
        },
        {
            id: 5,
            title: "Survive the Game",
            info: "Dublaj & Altyazılı",
            rating: "3.0",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/survive-the-game.jpg"
        },
        {
            id: 6,
            title: "Uncloked - Kilitsiz",
            info: "Türkçe Altyazılı",
            rating: "6.4",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/unlocked.jpg"
        },
        {
            id: 7,
            title: "Davet - The Invitation",
            info: "Dublaj & Altyazılı",
            rating: "5.3",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-invitation.jpg"
        },
        {
            id: 8,
            title: "Evlat",
            info: "Türkçe Altyazılı",
            rating: "6.1",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-son.jpg"
        },
        {
            id: 9,
            title: "Infinity Pool",
            info: "Türkçe Altyazılı",
            rating: "6.1",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/infinity-pool.jpg"
        },
    ]

    const popularSeries = [
        {
            id:1,
            title:"The Flash",
            rating: "7.5",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-flash-izle.jpg"
        },
        {
            id:2,
            title:"You",
            rating: "7.7",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/you-izle-3.jpg"
        },
        {
            id:3,
            title:"Gannibal",
            rating: "7.4",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/gannibal.jpg"
        },
        {
            id:4,
            title:"Şahmaran",
            rating: "5.1",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/shahmaran.jpg"
        },
        {
            id:5,
            title:"Vikings: Valhalla",
            rating: "7.3",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/vikings-valhalla.jpg"
        },
        {
            id:6,
            title:"İmparatorlukların Yükseli...",
            rating: "7.5",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-flash-izle.jpg"
        },
        {
            id:7,
            title:"Treason",
            rating: "6.3",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/treason.jpg"
        },
        {
            id:8,
            title:"The Witcher Blood Origin",
            rating: "4.7",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-witcher-blood-origin.jpg"
        },
        {
            id:9,
            title:"Alice in Borderland",
            rating: "7.7",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/alice-in-borderland-izle.jpg"
        },
    ]


    return (
        <aside className='flex flex-col gap-5 p-5'>
            <button className='flex items-center justify-center gap-2 w-full text-sm bg-customRed hover:bg-darkRed text-white py-2 rounded-xl font-bold'>
                <FaRobot /> Film Robotu
            </button>
            <button className='flex items-center justify-center text-sm border border-solid border-gray4 text-gray4 gap-2 w-full py-2 rounded-xl font-bold hover:bg-gray4 hover:text-white'><BiCommentAdd /> Film İstekleri</button>
            {/* Nette İlk Bölümü */}
            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div className='bg-dark py-2 px-4 text-sm font-bold text-white rounded-t-md'>Nette İlk</div>
                    <div className='flex items-center justify-end border-b-2 border-solid border-gray flex-1 h-full'>
                        <AiOutlineStar className='text-yellow-500 text-xl' />
                    </div>
                </div>
                <div className='bg-dark flex flex-col p-2 gap-2'>
                    {firstOnTheNet.map((mov) => (
                        <div key={mov.id} className='flex cursor-pointer hover:bg-gray6 items-center rounded-l-full w-full rounded-r-lg bg-gray5 gap-1 p-1'>
                            <div className='rounded-full w-12 h-12'>
                                <img className='w-12 h-12 rounded-full' src={mov.image} alt={mov.id} />
                            </div>
                            <div className='flex flex-1 flex-col justify-between h-full p-1 rounded-r-lg'>
                                <h4 className='text-xs text-white font-bold '>{mov.title}</h4>
                                <div className='flex items-center justify-between w-full text-xs rounded-r-lg'>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            {mov.info === "Dublaj & Altyazılı" && <img className='h-3' src={require("../assets/tr.svg").default} alt="tr" />}
                                            <BiCaptions className="rounded-md bg-lightGray text-white" />
                                        </div>
                                        <div className='flex items-center gap-1 text-gray4 font-bold'>
                                            {mov.info === "Dublaj & Altyazılı" ? <small>Dublaj & Altyazılı</small> : <small>Türkçe Altyazılı</small>}
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center gap-1 text-yellow-500 font-bold'>
                                        <AiFillStar /> {mov.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Dillere Göre Filmler */}

            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div className='bg-dark py-2 px-4 text-sm font-bold text-white rounded-t-md'>Dillere Göre Filmler</div>
                    <div className='flex items-center justify-end border-b-2 border-solid border-gray flex-1 h-full'>
                        <BsHeadphones className='text-yellow-500 text-xl' />
                    </div>
                </div>
                <div className='bg-dark text-sm flex flex-col p-2 gap-2'>
                    <div className='flex cursor-pointer text-white items-center gap-2 p-2'>
                        <BiCaptions className="rounded-md w-4 bg-lightGray text-white" />
                        Türkçe Altyazılı
                    </div>
                    <div className='flex cursor-pointer text-white items-center gap-2 p-2'>
                        <img className='h-3' src={require("../assets/tr.svg").default} alt="tr" />
                        Türkçe Dublaj
                    </div>
                </div>
            </div>

            {/* Türlerine Göre Filmler */}
            
            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div className='bg-dark py-2 px-4 text-sm font-bold text-white rounded-t-md'>Türlerine Göre Filmler</div>
                    <div className='flex items-center justify-end border-b-2 border-solid border-gray flex-1 h-full'>
                        <CgMenuGridR className='text-yellow-500 text-xl' />
                    </div>
                </div>
                <div className='bg-dark flex flex-col py-3 px-5 gap-2 text-white text-sm'>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Aile</a>
                            <a href='/#'>Aksiyon</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Animasyon</a>
                            <a href='/#'>Belgesel</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Bilim Kurgu</a>
                            <a href='/#'>Biyografi</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Dram</a>
                            <a href='/#'>Fantastik</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Gerilim</a>
                            <a href='/#'>Gizem</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Komedi</a>
                            <a href='/#'>Korku</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Macera</a>
                            <a href='/#'>Müzik</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Polisiye</a>
                            <a href='/#'>Romantik</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Savaş</a>
                            <a href='/#'>Spor</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Suç</a>
                            <a href='/#'>Tarih</a>
                        </div>
                </div>
            </div>

            {/* Özel Kategoriler */}
            
            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div className='bg-dark py-2 px-4 text-sm font-bold text-white rounded-t-md'>Özel Kategoriler</div>
                    <div className='flex items-center justify-end border-b-2 border-solid border-gray flex-1 h-full'>
                        <GiStarShuriken className='text-yellow-500 text-xl' />
                    </div>
                </div>
                <div className='bg-dark flex flex-col py-3 px-5 gap-2 text-white text-sm'>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Japon Filmleri</a>
                            <a href='/#'>Kore Filmleri</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Hint Filmleri</a>
                            <a href='/#'>Türk Filmleri</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>DC Yapımları</a>
                            <a href='/#'>Marvel Yapı...</a>
                        </div>
                        <div className='grid grid-cols-2'>
                            <a href='/#'>Amazon Yapı...</a>
                            <a href='/#'>1080P Filmler</a>
                        </div>
                            
                </div>
            </div>

            {/* Popüler Diziler */}
            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div className='bg-dark py-2 px-4 text-sm font-bold text-white rounded-t-md'>Nette İlk</div>
                    <div className='flex items-center justify-end border-b-2 border-solid border-gray flex-1 h-full'>
                        <AiOutlineStar className='text-yellow-500 text-xl' />
                    </div>
                </div>
                <div className='bg-dark flex flex-col p-2 gap-2'>
                    {popularSeries.map((mov) => (
                        <div key={mov.id} className='flex cursor-pointer hover:bg-gray6 items-center rounded-l-full w-full rounded-r-lg bg-gray5 gap-1 p-1'>
                            <div className='rounded-full w-12 h-12'>
                                <img className='w-12 h-12 rounded-full' src={mov.image} alt={mov.id} />
                            </div>
                            <div className='flex flex-1 flex-col justify-between h-full p-1 rounded-r-lg'>
                                <h4 className='text-xs text-white font-bold '>{mov.title}</h4>
                                <div className='flex items-center justify-between w-full text-xs rounded-r-lg'>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <MdMonitor className="rounded-md text-green-600" />
                                        </div>
                                        <div className='flex items-center gap-1 text-gray4 font-bold'>
                                            <small>Yabancı Dizi</small>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center gap-1 text-yellow-500 font-bold'>
                                        <AiFillStar /> {mov.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </aside>
    )
}
