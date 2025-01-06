const FotoGrandePrincipal = 'https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185668/FotoGrandePrincipal_nsbtve.jpg'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useState } from "react";
import styled from 'styled-components';

const PNav = styled.p`
    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }
`;

export const Presentation = () => {

    const [hoverColor, setHoverColor] = useState('#000000');

    const generarColorAleatorio = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const handleHover = () => {
        setHoverColor(generarColorAleatorio());
    };

    // const frase = "Hola soy Joan Sebastian,".split('');
    // const frase2 = ' desarrollador Full Stack'.split('');
    // const bienvenido = 'Bienvenido a mi Portafolio!'.split('');

    return (
        <div
            className="bg-white sm:w-3/4 w-full h-[495px] absolute bottom-0 rounded-t-[45px] flex flex-col justify-around items-center  "
        >
            <div className='flex flex-col justify-center items-center -translate-y-36 gap-2'>
                <img className="w-[250px] h-[250px] lg:h-80 lg:w-80 rounded-[50%] " src={FotoGrandePrincipal} alt="Foto principal"></img>
                <PNav
                    hoverColor={hoverColor}
                    onMouseEnter={handleHover}
                    className='text-center text-2xl sm:text-3xl'>
                    Hola soy Joan Sebastian, <br />
                    Bienvenido a mi <br />
                    Portafolio
                </PNav>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center -translate-y-24">

                <h1 className="text-center text-2xl sm:text-3xl">
                    Full Stack <br />
                    Developer
                </h1>
                <MdKeyboardDoubleArrowUp className='w-10 h-10 sm:w-16 sm:h-16 animate-bouncing animate-delay-800'/>

                {/* <div className="font-montserrat font-bold text-5xl mb-[130px] mt-3 w-full flex flex-wrap items-center justify-center">
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
                </div> */}
            </div>
        </div>
    )
} 