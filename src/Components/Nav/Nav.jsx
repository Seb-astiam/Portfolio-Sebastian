import { useState } from 'react';
const FondoHoverMarca = 'https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185667/FondoHoverMarca_lncwc8.png'
const FondoNoHoverMarca = 'https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185667/FondoNoHoverMarca_y7cx5i.png'
import { Presentation } from "./Presentation";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

export const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { name: 'Experiencia', href: '#Experience' },
        { name: 'Sobre Mi', href: '#sobreMi' },
        { name: 'Tecnologias', href: '#Technologies' },
        { name: 'Contactame', href: '#Contactame' },
    ];

    return (
        <div id="Nav" className="h-[100vh] flex flex-col items-center justify-start  bg-[#1b1b1b] gap-20">
            <div id="desktop" className="hidden md:flex w-full justify-evenly font-montserrat font-bold h-[110px] fixed z-10 bg-[#1b1b1b] items-center shadow-lg">
                <div className="relative w-[70px] h-[70px] ">
                    <img className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 hover:opacity-0 cursor-pointer" src={FondoNoHoverMarca} alt="Foto principal" />
                    <a href="#Nav"><img className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100 cursor-pointer" src={FondoHoverMarca} alt="Foto principal" /></a>
                </div>

                <h1 className="py-2 px-4 font-montserrat font-semibold text-white md:text-xl text-2xl">Joan Agudelo</h1>
                {navigation.map((ruta, index) => {
                    return (       
                        <a
                            key={index}
                            href={ruta.href}
                            className="flex items-center md:px-4  lg:py-4 lg:px-10 h-[60px] text-white border border-white cursor-pointer shadow-custom
                            hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hoverCustom transition-all hover:text-[#44f814] 
                            focus:translate-x-[4px] focus:translate-y-[4px] focus:bg-[#acfdb0] focus:border-white focus:border-3 focus:text-[#1b1b1b] focus:shadow-hoverCustom rounded-[20px]"
                        >
                            {ruta.name}
                        </a>
                    );
                })}
            </div>

            <div id="mobile" className="md:hidden flex justify-between items-center w-full px-8 h-[110px] fixed z-10 bg-[#1B1B1B]  shadow-lg">

                <a href="/"><img className="h-20" src={FondoNoHoverMarca} alt="Foto principal" /></a>

                <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-4xl focus:outline-none'>
                    {menuOpen ? <MdOutlineClose className="text-white"/> : <FiMenu className="text-white"/>}
                </button>

                {
                    menuOpen && (
                        <div className='fixed inset-0 bg-[#1b1b1b] z-20 h-screen flex flex-col items-center justify-around animate-slide-in-right '>
                            <div className='flex justify-between w-screen px-10'>
                                <a href="/" ><img className="h-20" src={FondoNoHoverMarca} alt="Foto principal" /></a>
                                <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-4xl focus:outline-none'>
                                    {menuOpen ? <MdOutlineClose className="text-white"/> : <FiMenu className="text-white"/>}
                                </button>
                            </div>
                            {navigation.map((ruta, index) => {
                                return (       
                                    <a
                                        key={index}
                                        href={ruta.href}
                                        className="w-72 h-14 py-3 text-center text-white border border-white cursor-pointer shadow-custom rounded-[20px]"
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        {ruta.name}
                                    </a>
                                );
                            })}
                          
                        </div>
                    )
                }
                
            </div>



                <Presentation />
        </div>
    );
};

