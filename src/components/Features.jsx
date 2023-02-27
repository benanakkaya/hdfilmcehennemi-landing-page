import React, { useState } from 'react'
import { FaComment } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BiCaptions } from "react-icons/bi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Features() {

    const [features, setFeatures] = useState([
        {
            id: 1,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/glass-onion-a-knives-out-mystery_list.jpg",
            title: "Bıçaklar Çekildi Gizemli ...",
            info: "Dublaj & Altyazılı",
            year: "2022",
            tags: ["Komedi", "Suç", "Dram"],
            commentCount: "121",
            rating: "7.2",
            text: "Cesur dedektif Benoit Blanc kendisini bir Yunan adasında lüks bir özel mülkte bulur, ancak oraya nasıl ve neden geldiği bilmecelerin başlangıcıdır. Blanc kısa süre sonra, milyarder Miles Bron'un yıllık buluşmaları için daveti üzerine toplanan tamamen farklı bir arkadaş grubuyla tanışır..."
        },
        {
            id: 2,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/three-thousand-years-of-longing_list.jpg",
            title: "Üç Bin Yıllık Bekleyiş",
            info: "Dublaj & Altyazılı",
            year: "2022",
            tags: ["Dram", "Fantastik", "Romantik"],
            commentCount: "264",
            rating: "6.7",
            text: "Kavanoza hapsedilmiş bir cin (Idris Elba) ile bilgin Alithea (Tilda Swinton), İstanbul'da bir otel odasındaki uzun sohbetleri sırasında bir anlaşma yaparlar. Cin, eğer özgürlüğünü kazanmasına yardım ederse Alithea'nın üç dileğini yerine getireceğini söyler..."
        },
        {
            id: 3,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/ant-man-and-the-wasp-quantumania_list.jpg",
            title: "Ant-Man ve Wasp Quantumania",
            info: "Altyazılı",
            year: "2023",
            tags: ["Aksiyon", "Macera", "Komedi"],
            commentCount: "169",
            rating: "6.5",
            text: "Marvel Sinematik Evreni'nin beşinci fazının ilk filmi Ant-Man ve Wasp: Quantumania, Avengers: Endgame sonrası insanlar arasındaki popülerliğinin keyfini çıkaran Scott Lang, yani Ant-Man'in, kızının yaptığı bir sinyal gönderici aracılığıyla bu sefer tüm ailesiyle..."
        },
        {
            id: 4,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/black-adam-12_list.jpg",
            title: "Black Adam",
            info: "Dublaj & Altyazılı",
            year: "2022",
            tags: ["Aksiyon", "Fantastik", "Bilim Kurgu"],
            commentCount: "587",
            rating: "6.4",
            text: "C.C. Beck ve Otto Binder'ın yaratıcısı olduğu DC çizgi romanlarına göre Black Adam, Shazam'ın şeytani ikizidir. Ancak ilerleyen zamanlarda Black Adam kötü olmayı bir nevi bırakarak, geçmişte işlediği suçları affettirmek amacıyla anti-kahramana dönüşür"
        },
        {
            id: 5,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/puss-in-boots-the-last-wish_list.jpg",
            title: "Çizmeli Kedi Son Dilek",
            info: "Dublaj & Altyazılı",
            year: "2022",
            tags: ["Animasyon", "Macera", "Komedi"],
            commentCount: "107",
            rating: "7.9",
            text: "Çizmeli Kedi 9 canından 8 tanesini kaybetmiştir. Son canını ise efsanevi Son Dilek'i bulup bu sayede tüm canlarını yenilemek için riske atacaktır."
        },
        {
            id: 6,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/babylon_list.jpg",
            title: "Babylon - Babil",
            info: "Altyazılı",
            year: "2022",
            tags: ["Komedi", "Dram", "Tarih"],
            commentCount: "119",
            rating: "7.3",
            text: "Babylon, 1920'li yılların Los Angeles'ında, sinemanın sessiz dönemden çıkış sürecinde adından söz ettiren bir aktör ile gözünü yıldız statüsüne dikmiş hırslı bir aktris adayının gözünden o dönemki Hollywood'un her anlamda aşırılığını gözler önüne serecek."
        },
        {
            id: 7,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/black-panther-wakanda-forever-105_list.jpg",
            title: "Black Panther: Wakanda...",
            info: "Dublaj & Altyazılı",
            year: "2022",
            tags: ["Aksiyon", "Dram", "Macera"],
            commentCount: "632",
            rating: "6.8",
            text: "2018 yapımı Black Panther serisinin ikinci devam filmi."
        },
        {
            id: 8,
            image: "https://www.hdfilmcehennemi.life/uploads/poster/m3gan_list.jpg",
            title: "M3GAN",
            info: "Altyazılı",
            year: "2022",
            tags: ["Korku", "Bilim Kurgu", "Gerilim"],
            commentCount: "179",
            rating: "6.4",
            text: "M3GAN, bir oyuncak şirketinin robot uzmanı tarafından tasarlanan, bir çocuğun en büyük arkadaşı ve bir ebeveynin en büyük müttefiki olmak üzere programlanmış, gerçeğe yakın bir oyuncak bebektir..."
        },
    ])

    const handlePrev = () => {
        let newList = features;
        let first = newList.shift();
        newList = [...newList, first]
        setFeatures(newList);
    }

    const handleNext = () => {
        let newList = features;
        let last = newList.pop();
        newList = [last, ...newList]
        setFeatures(newList);
    }


    return (
        <div className='grid xl:grid-cols-5 grid-cols-2 md:grid-cols-3 overflow-hidden relative '>
            {features.map((mov, ind) => (
                <div key={ind} className={ind > 4 ? 'hidden' :
                    ind === 3 || ind === 4 ? 'hidden bg-veryDark group xl:relative xl:flex flex-col items-center text-white ' :
                        ind === 2 ? 'group hidden bg-veryDark md:relative md:flex flex-col items-center text-white ' : 
                        ind === 0 || ind === 1 ? 'group bg-veryDark relative flex flex-col items-center text-white ' : null}>
                    <a className='relative' href="/#" >
                        <img className='group-hover:opacity-30 opacity-75' src={mov.image} alt={mov.id} />

                        <div className='absolute w-full p-3 flex flex-col gap-1 font-bold bottom-2 text-sm'>
                            <div className='hidden group-hover:flex items-center justify-center gap-1'>
                                {mov.tags?.map((tag) => (
                                    <span className='text-xs rounded-lg bg-dark p-1'>{tag}</span>
                                ))}
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='group-hover:text-customRed'>
                                    {mov.year}
                                </div>
                                <div className='flex items-center justify-center gap-1'>
                                    <FaComment />
                                    {mov.commentCount}
                                </div>
                                <div className='flex items-center justify-center gap-1 text-yellow-500'>
                                    <AiFillStar />
                                    {mov.rating}
                                </div>
                            </div>
                            <h3>{mov.title}</h3>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-1'>
                                    {mov.info === "Dublaj & Altyazılı" && <img className='h-3' src={require("../assets/tr.svg").default} alt="tr" />}
                                    <BiCaptions className="rounded-md bg-lightGray" />
                                </div>
                                <div className='flex items-center gap-1'>
                                    {mov.info === "Dublaj & Altyazılı" ? <small>Dublaj & Altyazılı</small> : <small>Türkçe Altyazılı</small>}
                                </div>
                            </div>
                        </div>
                        <div className='hidden group-hover:flex flex-col gap-2 absolute w-full p-3 top-2'>
                            <p className='text-center text-xs lg:text-sm'>{mov.text}</p>
                        </div>
                    </a>
                </div>
            ))}

            <GrFormPrevious onClick={handlePrev} className='bg-white hover:bg-customRed opacity-75 cursor-pointer group rounded-full z-10 text-4xl absolute top-36 left-5' />

            <GrFormNext onClick={handleNext} className='bg-white hover:bg-customRed opacity-75 cursor-pointer group rounded-full z-10 text-4xl absolute top-36 right-5' />

        </div >
    )
}
