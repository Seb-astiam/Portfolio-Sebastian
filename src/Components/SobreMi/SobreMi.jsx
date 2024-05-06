import { NavAbout } from "./NavAbout"
import { DiJsBadge } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { useSelector } from "react-redux";

// PROYECTO BOSCO
import PrincipalBosco from "../../assets/PrincipalBosco.png"
import LoginBosco from "../../assets/LoginBosco.png"
import HomeBosco from "../../assets/HomeBosco.png"
import DetailBosco from "../../assets/DetailBosco.png"
import RegistroMascotaBosco from "../../assets/RegistroMascotaBosco.png"
import RegistroAlojamientoBosco from "../../assets/RegistroAlojamientoBosco.png"
import HistorialReservaBosco from "../../assets/HistorialReservaBosco.png"
import RegistroUsuarioBosco from "../../assets/RegistroUsuarioBosco.png"


// PROYECTO POKEMON
import LandingProyectoPokemon from "../../assets/LandingProyectoPokemon.png"
import HomeProyectoPokemon from "../../assets/HomeProyectoPokemon.png"
import DetailProyectoPokemon from "../../assets/DetailProyectoPokemon.png"

import { CgChevronRight } from "react-icons/cg";
import { CgChevronLeft } from "react-icons/cg";
import { useState } from "react";


export const SobreMi = () => {

    const tecnologías = useSelector((state) => state.storage.skills)
    const Bosco = useSelector((state) => state.storage.BoscoApp)
    const Pokemon = useSelector((state) => state.storage.PokeApi)

    const iconosDev = [
        DiJsBadge,
        DiBootstrap,
        DiGithubBadge,
        DiNodejsSmall,
        DiPostgresql,
        DiReact,
        DiHtml5,
        DiGit,
        DiVisualstudio 
    ]

    const nombreIconos = [
        {id: 0, name: 'JavaScript'},
        {id: 1, name: 'Bootstrap'},
        {id: 2, name: 'GitHub'},
        {id: 3, name: 'NodeJS'},
        {id: 4, name: 'Postgresql'},
        {id: 5, name: 'React'},
        {id: 6, name: 'Html'},
        {id: 7, name: 'Git'},
        {id: 8, name: 'VisualStudio'}
    ]

    const imagenesProyectoPokemon = [
        {img: LandingProyectoPokemon, name: "LandingPage", descripción: "Vista inicial de la aplicación, Ambientado a el diseño de los juegos"},
        {img: HomeProyectoPokemon, name: "HomePage", descripción: "En la pagina principal encontraremos la vista de todos los pokemones que provienen de la api y los que se vayan creando"},
        {img: DetailProyectoPokemon, name: 'DetailPage', descripción: "Detalle de cada pokemon con posibilidad de cambiar entre cada uno de los pokemones sin salir de la pagina"}

    ]

    const imagenesProyectoBosco = [
        {img: PrincipalBosco, name: "Pagina Principal", descripción: "Vista inicial de la aplicación, contiene botones de registro, de inicio de sesión, alojamientos mas relevantes y información de interes que brinda confianza a los nuevos usuarios."},
        {img: LoginBosco, name: "Inicio de sesión", descripción: "Cuenta con inicio facil a traves de google o facebook asi como tambien de manera manual, en caso de no tener cuenta registrada cuenta con un link que redirecciona a la pagina de registro."},
        {img: RegistroUsuarioBosco, name: 'Registro de usuario', descripción: "Pagina clave para poder registrarse dentro de la app, cuenta con registro rapido con google y facebook."},
        {img: HomeBosco, name: 'Pagina de inicio', descripción: "Inicio de aplicación, muestra todos los alojamientos disponibles, cuenta con filtros para optimizar la busqueda del alojamiento."},
        {img: DetailBosco, name: 'Detalle Alojamiento', descripción: "Pagina principal de cada alojamiento que contiene el formulario para hacer la reserva."},
        {img: RegistroMascotaBosco, name: 'Registro Mascota', descripción: "Pagina registro de huesped."},
        {img: RegistroAlojamientoBosco, name: 'Registro Alojamiento', descripción: "Pagina registro de los Alojamientos."},
        {img: HistorialReservaBosco, name: 'Historial de reserva', descripción: "Aqui podras ver información de todas tus reservas."}
    ]

    const [numberPage, setNumberPage] = useState(1);

    const PaginadoPokemon = (arr) => {
        const NumVistasPage = 1;
        const lastIndex = numberPage * NumVistasPage;
        const firstIndex = lastIndex - NumVistasPage;
        const vistaIndividual = arr.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(arr.length / NumVistasPage);

        const nextPage = () => {
            if (lastIndex < arr.length) {
                setNumberPage(numberPage + 1);
            } else {
                setNumberPage(1); 
            }
        }
     
         const prevPage = () => {
            if (firstIndex > 0) {
                setNumberPage(numberPage - 1);
            } else {
                setNumberPage(totalPages); 
            }
        }

        return (<div className="flex flex-coldivfull h-[700px] w-[90%] justify-evenly gap-10 items-center font-montserrat bg-black m-6 rounded-[50px]">
                {vistaIndividual.map((imagen) => {
                    return <div className="flex flex-col items-center font-monserrat ">
                        <div className="flex justify-center items-center ">
                            <button 
                                onClick={prevPage} 
                                disabled={numberPage === 1} 
                                className={`cursor-pointer text-white hover:text-[#44f814] transition ${numberPage === 1 ? "text-gray-500 disabled-color hover:text-gray-500" : ""}`}>
                                    <CgChevronLeft className="h-[50px] w-[50px]" />
                            </button>
                            <img src={imagen.img} className="h-[400px] w-[600px] rounded-[20px]"/>
                            <button 
                                onClick={nextPage} 
                                disabled={numberPage === totalPages} 
                                className={`cursor-pointer text-white hover:text-[#44f814] transition ${numberPage === totalPages ? "text-gray-500 disabled-color hover:text-gray-500" : ""}`}>
                                    <CgChevronRight className="h-[50px] w-[50px]"/>
                            </button>

                        </div>
                        <h1 className="font-extrabold text-white">{imagen.name}</h1>
                        <p className="mt-8 text-white text-center">
                            {imagen.descripción}
                        </p>
                    </div>} )}
            </div>)
    }



    return (
        <div id="sobreMi" className="h-screen flex justify-center bg-[#1b1b1b] border-t-4 border-[#1b1b1b]">
            <div className="h-[90%] w-[85%] bg-[#acfdb0] flex flex-col rounded-b-[45px] pt-[150px]">

             
               
                <div className="flex justify-center items-start w-full h-[80%] rounded-b-[45px] font-montserrat font-normal">
                    
                    <div className="w-[50%] h-full content-center justify-center flex-wrap text-start p-[100px] flex flex-col gap-[50px] text-xl ">
                        <div className="border-8 border-black p-20 flex flex-col gap-3 rounded-[50px] bg-white border-double ">
                            <h1 className="text-4xl font-bold">Sobre Mi</h1>
                            <p className="w-[90%]"> 
                                Hola, me llamo <strong>Joan Sebastian Agudelo</strong> Soy programador Full-Stack con formación en Química y Farmacia, 
                                tengo experiencia practica en diversos proyectos utilizando Javascript, Socket.io, postgreSQL entre otras tecnologías, 
                                realizando tareas como chats en tiempo real, funciones lógicas, manejo de información, deploy y más.
                            </p>

                            <p className="w-[90%]"> 
                                Con conocimiento en cloudinary y autenticación de terceros e interes en interiorisarme en AWS, 
                                soy una persona muy disciplinada que mantiene siempre las ganas de seguir aprendiendo para poder aportar valor en los equipos de trabajo 
                                a los cuales pertenezca, ademas de fomentar un clima laboral de compañerismo y buen humor.
                            </p>
                        </div>
                    </div>

                    <div className="w-[50%] h-full content-center justify-center flex-wrap text-xl">
                        { tecnologías && <div className="flex flex-col h-full w-[90%] justify-evenly gap-10 items-center font-montserrat bg-black m-6 rounded-[50px]">
                            <h1 className="font-bold text-white"> Desarrollador web Full Stack</h1>

                            <div className="flex flex-wrap gap-10 items-center justify-center w-[500px] ">
                                {
                                    iconosDev.map((Icono, index) => {
                                        const iconoInfo = nombreIconos.find((def) => def.id === index);
                                        const nombre = iconoInfo ? iconoInfo.name : '';
                                        return <div className="flex flex-col" key={index}>
                                            <p className="text-white z-10">{nombre}</p>
                                            <Icono className="h-[75px] w-[75px] hover:scale-125 transition-all text-white"/>
                                        </div> 
                                    })
                                }

                            </div>
                        </div>}

                        { Bosco && PaginadoPokemon(imagenesProyectoBosco) }

                        { Pokemon && PaginadoPokemon(imagenesProyectoPokemon) }
                    </div>
                </div>

                <div className="h-[20%]">
                    <NavAbout />
                </div>


               
            </div>
        </div>
    )
}





