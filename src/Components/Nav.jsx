import { useState } from "react";
import styled from 'styled-components';
import FotoGrandePrincipal from '../assets/FotoGrandePrincipal.png'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import FondoHoverMarca from '../assets/FondoHoverMarca.png'
import FondoNoHoverMarca from '../assets/FondoNoHoverMarca.png'

const PNav = styled.p`
    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }
`;


// const PNav = styled.p`
//     transition: all 0.3s ease-in-out;
//     &:hover {
//         color: ${props => props.hoverColor}; /* Cambia al color deseado */
//         transform: scale(1.1); /* Aumenta el tamaño al 110% */
//         /* Agrega cualquier otra animación deseada */
//     }
// `;

export const Nav = () => {
    const [hoverColor, setHoverColor] = useState('#000000');

    const generarColorAleatorio = () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    const navigation = [
        { name: 'Sobre Mi', href: '#sobreMi' },
        { name: 'Features', href: '/features' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Company', href: '/company' },
    ];

    const frase = "Hola soy Joan Sebastian,".split('');
    const frase2 = ' desarrollador Full Stack'.split('');
    const bienvenido = 'Bienvenido a mi Portafolio!'.split('');

    const handleHover = () => {
        setHoverColor(generarColorAleatorio());
    };

    return (
        <div id="Nav" className="h-[100vh] flex flex-col items-center justify-start  bg-[#1b1b1b] gap-20">
            <div className="flex w-full justify-evenly font-montserrat font-bold h-[150px] fixed z-10 bg-[#1b1b1b] items-center shadow-lg">
            <div className="relative w-[80px] h-[80px] right-[-150px]">
                <img className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 hover:opacity-0 cursor-pointer" src={FondoNoHoverMarca} alt="Foto principal" />
                <a href="#Nav"><img className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100 cursor-pointer" src={FondoHoverMarca} alt="Foto principal" /></a>
            </div>

                <h1 className="py-4 px-14 font-montserrat font-semibold text-white text-2xl">Joan Agudelo</h1>
                {navigation.map((ruta, index) => {
                    return (       
                        <a
                            key={index}
                            href={ruta.href}
                            className="flex-none py-4 px-14 h-[60px] text-white border border-white cursor-pointer shadow-custom
                            hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hoverCustom transition-all hover:text-[#44f814] 
                            focus:translate-x-[4px] focus:translate-y-[4px] focus:bg-[#acfdb0] focus:border-white focus:border-3 focus:text-[#1b1b1b] focus:shadow-hoverCustom rounded-[20px]"
                        >
                            {ruta.name}
                        </a>
                    );
                })}
            </div>


            <div 
                className="bg-[#acfdb0] w-[85%] h-[600px] absolute bottom-0 rounded-t-[45px] flex justify-evenly items-center"
            >   
                <div>
                    <img className="w-[600px] h-[600px] rounded-[50%] bg-slate-700 top-[-50px] translate-y-[-240px] translate-x-[-30px] mb-[-150px]" src={FotoGrandePrincipal} alt="Foto principal"></img>
                    <div className="flex gap-2">
                        <ArrowUpRightIcon className="w-[60px] h-[65px]"/>
                        <div className="flex-col text-2xl">
                            <h1 className="font-monserrat font-bold">Full Stack</h1>
                            <h1 className="font-monserrat font-bold">Developer</h1>
                        </div>
                    </div>
                </div>
                <div className="h-full flex flex-col justify-center gap-4">
                    <div className="font-montserrat font-bold text-7xl mb-[130px] mt-5 w-full flex flex-wrap items-center justify-center">
                        {bienvenido.map((letra, index) => (
                            letra === " " ? (
                                <p key={index}>&nbsp;</p>
                            ) : (
                                <PNav
                                    key={index}
                                    hoverColor={hoverColor}
                                    className={`hover:scale-110 inline-block duration-75`}
                                    onMouseEnter={handleHover}
                                >
                                    {letra}
                                </PNav>
                            )
                        ))}
                    </div>
                    <div className="font-montserrat font-semibold text-5xl text-center w-full flex flex-wrap items-center justify-center">
                        {frase.map((letra, index) => (
                            letra === " " ? (
                                <p key={index}>&nbsp;</p>
                            ) : (
                                <PNav
                                    key={index}
                                    hoverColor={hoverColor}
                                    className={`hover:scale-110 inline-block duration-75`}
                                    onMouseEnter={handleHover}
                                >
                                    {letra}
                                </PNav>
                            )
                        ))}
                    </div>
                    <div className="font-montserrat font-semibold text-5xl text-center w-full flex flex-wrap items-center justify-center">
                        {frase2.map((letra, index) => (
                            letra === " " ? (
                                <p key={index}>&nbsp;</p>
                            ) : (
                                <PNav
                                    key={index}
                                    hoverColor={hoverColor}
                                    className={`hover:scale-110 inline-block duration-75`}
                                    onMouseEnter={handleHover}
                                >
                                    {letra}
                                </PNav>
                            )
                        ))}.
                    </div>
                </div>
            </div>
        </div>
    );
};
