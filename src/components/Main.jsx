import React from 'react';
import { FaComment } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BiCaptions } from "react-icons/bi";

export default function Main() {

    const movies = [
        {
            id: 1,
            title: "Bruiser",
            year: "2022",
            commentCount: 12,
            rating: "5.7",
            tags: ["Dram"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/bruiser_list.jpg",
            text: "Yaz tatili sırasında, 14 yaşındaki Darious erkekliğinin sınırlarını keşfeder. Yaz tatili boyunca, 14 yaşındaki Darious, otoriter babası Malcolm ile yaşadığı..."
        },
        {
            id: 2,
            title: "Kulübeye Tıklat",
            year: "2023",
            commentCount: 106,
            rating: "6.2",
            tags: ["Korku", "Gizem", "Gerilim"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/knock-at-the-cabin_list.jpg",
            text: "Ücra bir kulübede tatil yapan genç bir kız ve ailesinin hayatı, silahlı dört yabancı tarafından rehin alınmalarıyla bambaşka bir hal alır. "
        },
        {
            id: 3,
            title: "Kahraman",
            year: "2021",
            commentCount: 10,
            rating: "7.5",
            tags: ["Dram"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/a-hero_list.jpg",
            text: "Filmin merkezinde, ödeyemediği bir borç yüzünden hapis cezası çeken Rahim var. Borcu tahsil etmeyi planladığı 2 günlük izin sırasında..."
        },
        {
            id: 4,
            title: "Maybe I Do",
            year: "2023",
            commentCount: 3,
            rating: "4.9",
            tags: ["Komedi", "Romantik"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/maybe-i-do_list.jpg",
            text: "Bir süredir birlikte olan Michelle ve Allen, evlilik kararı alır ve bu konuda görüşmek için ebeveynlerini davet ederler."
        },
        {
            id: 5,
            title: "Lullaby",
            year: "2022",
            commentCount: 43,
            rating: "4.7",
            tags: ["Korku"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/lullaby_list.jpg",
            text: "Yeni bir anne, eski bir kitapta bir ninni keşfeder ve kısa süre sonra şarkıyı bir lütuf olarak görmeye başlar, ancak ninninin, kadim iblis Lilith'i çağırdığı ortaya çıkınca dünyası büyük bir kabusa dönüşür."
        },
        {
            id: 6,
            title: "Call Me Chihiro",
            year: "2023",
            commentCount: 8,
            rating: "6.7",
            tags: ["Dram"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/call-me-chihiro_list.jpg",
            text: "Chihiro, sahil kenarındaki küçük bir bento dükkanı olan Nokonoko Bento'da çalışır ve şehirde popüler bir figür haline gelir."
        },
        {
            id: 7,
            title: "Koloni - Tides",
            year: "2021",
            commentCount: 53,
            rating: "5.4",
            tags: ["Bilim Kurgu", "Gerilim"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/tides_list.jpg",
            text: "Çok uzak olmayan bir gelecekte: Küresel bir felaket dünyadaki neredeyse tüm insanlığı yok ettikten sonra, Uzay Kolonisi Kepler'den seçkin bir astronot..."
        },
        {
            id: 8,
            title: "Cryptid",
            year: "2022",
            commentCount: 13,
            rating: "4.5",
            tags: ["Korku", "Gerilim"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/cryptid_list.jpg",
            text: "Maine'deki küçük bir kırsal kasaba, gizemli bir hayvanın yerel bir sakini vahşice parçalara ayırmasıyla şok olur."
        },
        {
            id: 9,
            title: "Women Talking",
            year: "2022",
            commentCount: 10,
            rating: "7.1",
            tags: ["Dram"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/women-talking_list.jpg",
            text: "Toews’in The New York Times tarafından “feminist bir manifesto” olarak tanımlanan romanından uyarlanan film"
        },
        {
            id: 10,
            title: "The Point Men",
            year: "2023",
            commentCount: 15,
            rating: "6.3",
            tags: ["Aksiyon", "Dram", "Gerilim"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/the-point-men_list.jpg",
            text: "Orta Doğu'da kaçırılan Koreli rehineleri kurtarmak için yabancı topraklarda mücadele eden ve hayatlarını riske atan bir diplomat ve bir ulusal istihbarat servisi ajanının hikayesi."
        },
        {
            id: 11,
            title: "Pıtırcık",
            year: "2021",
            commentCount: 2,
            rating: "5.7",
            tags: ["Komedi", "Aile"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/little-nicholas-treasure_list.jpg",
            text: "Küçük Nicholas’ın en sevdiği şey arkadaşlarıyla oynamaktır. Hatta en yakın arkadaşlarından oluşan çetesine ‘Yenilmezler’ ismini vermişlerdir. "
        },
        {
            id: 12,
            title: "Cocaine Bear",
            year: "2023",
            commentCount: 24,
            rating: "6.5",
            tags: ["Gerilim"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/cocaine-bear_list.jpg",
            text: "Polislerden, suçlulardan, turistlerden ve gençlerden oluşan tuhaf bir grup, istemeden kokain içtikten sonra 500 kiloluk bir kara ayının ölümcül bir saldırıya uğradığı Georgia ormanında bir araya gelir."
        },
        {
            id: 13,
            title: "France",
            year: "2021",
            commentCount: 9,
            rating: "5.9",
            tags: ["Dram", "Komedi"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/france_list.jpg",
            text: "Ünlü bir televizyon yıldızı ve gazeteci olan France de Meurs, hem kişisel hem de profesyonel olarak düşüşüne yol açan bir olaylar sarmalının içindedir."
        },
        {
            id: 14,
            title: "Beba",
            year: "2022",
            commentCount: 8,
            rating: "6.4",
            tags: ["Belgesel"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/beba_list.jpg",
            text: "Tarihsel ve toplumsal travmaya bakan New York'lu bir Afro-Latin'nın otoportresi."
        },
        {
            id: 15,
            title: "Evlat",
            year: "2022",
            commentCount: 16,
            rating: "6.1",
            tags: ["Dram"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/the-son_list.jpg",
            text: "Yeni bebeği olan başarılı bir avukat, eski karısınıdan olan ergenlik çağındaki oğluna bakmayı kabul eder. "
        },
        {
            id: 16,
            title: "Infinity Pool",
            year: "2023",
            commentCount: 37,
            rating: "6.1",
            tags: ["Suç", "Korku", "Gizem"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/infinity-pool_list.jpg",
            text: "James ve Em Foster, kurgusal La Tolqa adasında her şey dahil bir plaj tatilinin tadını çıkarırken, ölümcül bir kaza tatil beldesinin sapkın hazcılık turizm kültürünü ortaya çıkarır. "
        },
        {
            id: 17,
            title: "The Whale",
            year: "2022",
            commentCount: 54,
            rating: "7.9",
            tags: ["Dram"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/the-whale-1_list.jpg",
            text: "Şiddetli obeziteden muzdarip münzevi bir İngilizce öğretmeni, son bir affedilme şansı için görüşmediği genç kızıyla yeniden bağlantı kurmaya çalışır."
        },
        {
            id: 18,
            title: "Unlocked - Kilitsiz",
            year: "2023",
            commentCount: 42,
            rating: "6.4",
            tags: ["Dram", "Suç"],
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/unlocked_list.jpg",
            text: "Sıradan bir kadının tüm kişisel bilgilerini içeren telefonunu kaybetmesinin ardından hayatının nasıl altüst olduğunu ve tehlikeye girdiğini anlatan sürükleyici bir gerilim."
        },
        {
            id: 19,
            title: "Davet - The Invitation",
            year: "2022",
            commentCount: 76,
            rating: "5.3",
            tags: ["Korku", "Gizem"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/the-invitation_list.jpg",
            text: "The Invitation, kısa süre önce annesini kaybeden Evie'yi (Nathalie Emmanuel) takip ediyor. Yaptırdığı DNA testi sonucunda, varlığından haberdar olmadığı..."
        },
        {
            id: 20,
            title: "Viva Maestro!",
            year: "2022",
            commentCount: 0,
            rating: "7.4",
            tags: ["Belgesel"],
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/viva-maestro_list.jpg",
            text: "Los Angeles Filarmoni Orkestrası Şefi Gustavo Dudamel'in hayatı. Venezüela'da çocuk ve gençlerin suça eğilimlerini engellemek için oluşturulan orkestrada keşfedilerek..."
        },
    ]

    const lastSeries = [
        {
            id: 1,
            title: "Magnum P.I.",
            episode: "5.Sezon 3.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/magnum-pi-izle.jpg"
        },
        {
            id: 2,
            title: "Godfather of Harlem",
            episode: "3.Sezon 6.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/godfather-of-harlem-izle.jpg"
        },
        {
            id: 3,
            title: "1923",
            episode: "1.Sezon 8.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/1923.jpg"
        },
        {
            id: 4,
            title: "Mayor of Kingstown",
            episode: "2.Sezon 7.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/mayor-of-kingstown.jpg"
        },
        {
            id: 5,
            title: "Island",
            episode: "1.Sezon 8.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/island.jpg"
        },
        {
            id: 6,
            title: "Laison",
            episode: "1.Sezon 1.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/liaison.jpg"
        },
        {
            id: 7,
            title: "Anne Rices Mayfair Witches",
            episode: "1.Sezon 8.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/anne-rice-s-mayfair-witches.jpg"
        },
        {
            id: 8,
            title: "Young Rock",
            episode: "3.Sezon 13.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/young-rock-izle.jpg"
        },
        {
            id: 9,
            title: "Formula 1: Drive to Survive",
            episode: "5.Sezon 10.Bölüm",
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/formula-1-drive-to-survive-izle.jpg"
        },
        {
            id: 10,
            title: "The Ark",
            episode: "1.Sezon 4.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-ark.jpg"
        },
        {
            id: 11,
            title: "Wolf Pack",
            episode: "1.Sezon 5.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/wolf-pack.jpg"
        },
        {
            id: 12,
            title: "Karnaval Sokağı",
            episode: "2.Sezon 4.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/karnaval-sokagi-izle.jpg"
        },
        {
            id: 13,
            title: "Servant",
            episode: "4.Sezon 7.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/servant-izle.jpg"
        },
        {
            id: 14,
            title: "Star Trek: Picard",
            episode: "3.Sezon 2.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/star-trek-picard-izle.jpg"
        },
        {
            id: 15,
            title: "Truth Be Told",
            episode: "3.Sezon 6.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/truth-be-told-izle.jpg"
        },
        {
            id: 16,
            title: "Hello Tomorrow!",
            episode: "1.Sezon 4.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/hello-tomorrow.jpg"
        },
        {
            id: 17,
            title: "Outer Banks",
            episode: "3.Sezon 10.Bölüm",
            info: "Dublaj & Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/outer-banks-izle.jpg"
        },
        {
            id: 18,
            title: "The Flash",
            episode: "9.Sezon 3.Bölüm",
            info: "Altyazılı",
            image: "https://www.hdfilmcehennemi.life/uploads/poster/thumb/the-flash-izle.jpg"
        },
    ]



    return (
        <main className='col-span-12 lg:col-span-9 flex flex-col p-5'>
            <div className='flex items-center text-gray3 '>
                <ul className='flex flex-wrap items-center text-sm font-bold'>
                    <li className='bg-dark text-white p-2 rounded-t-md cursor-pointer'>Yeni Eklenenler</li>
                    <li className='p-2 rounded-t-md cursor-pointer'>Tavsiye Filmler</li>
                    <li className='p-2 rounded-t-md cursor-pointer'>IMDB 7+ Filmler</li>
                    <li className='p-2 rounded-t-md cursor-pointer'>En Çok Yorumlanan</li>
                    <li className='p-2 rounded-t-md cursor-pointer'>En Çok Beğenilen</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-dark p-4 rounded-md rounded-tl-none'>
                    {movies.map((mov, ind) => (
                        <div key={ind} className={'group bg-dark rounded-md  relative flex flex-col items-center text-white '}>
                            <a className='relative' href="/#" >
                                <img className='rounded-md group-hover:opacity-30 opacity-75' src={mov.image} alt={mov.id} />

                                <div className='absolute w-full p-3 flex flex-col gap-1 font-bold bottom-2 text-sm'>
                                    <div className='hidden group-hover:flex items-center justify-center gap-1'>
                                        {mov.tags?.map((tag,ind) => (
                                            <span key={ind} className='text-xs rounded-lg bg-dark p-1'>{tag}</span>
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
                                    <p className='text-center text-sm md:text-xs '>{mov.text}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                    <div className='lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-1 flex items-center justify-center pt-4'>
                        <ul className='flex items-center justify-center gap-2'>
                            <li className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-customRed text-white font-bold'>1</li>
                            <li className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray5 hover:bg-gray6 text-white font-bold'>2</li>
                            <li className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray5 hover:bg-gray6 text-white font-bold'>3</li>
                            <li className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray5 hover:bg-gray6 text-white font-bold'>4</li>
                            <li className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray5 hover:bg-gray6 text-white font-bold'>5</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col bg-gray2'>
                    <div className='flex items-end'>
                        <div className='flex items-center bg-dark rounded-t-lg p-2 px-4 text-sm font-bold text-white gap-1'>Son Eklenen Yabancı Dizi Bölümleri</div>
                        <div className='border-b-2 border-solid flex items-center justify-end border-gray flex-1'>
                            <a href='/#' className='text-white font-bold hover:text-red-400 cursor-pointer text-sm'>Tüm Diziler</a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-4 px-2 bg-dark'>
                        {lastSeries.map((mov) => (
                            <div key={mov.id} className='flex cursor-pointer  hover:bg-gray6 items-center rounded-full w-full bg-gray5 gap-1 p-1'>
                                <div className='w-12 h-12'>
                                    <img className='w-12 h-12 rounded-full' src={mov.image} alt={mov.id} />
                                </div>
                                <div className='flex flex-1 flex-col justify-between h-full p-1 px-2 '>
                                    <h4 className='text-xs text-white font-bold '>{mov.title}</h4>
                                    <div className='flex items-center justify-between w-full text-xs'>
                                        <div className='flex items-center justify-center gap-1 text-gray4 font-bold'>
                                            {mov.episode}
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center gap-1'>
                                                {mov.info === "Dublaj & Altyazılı" && <img className='h-3' src={require("../assets/tr.svg").default} alt="tr" />}
                                                <BiCaptions className="rounded-md bg-lightGray text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </main>
    )
}
