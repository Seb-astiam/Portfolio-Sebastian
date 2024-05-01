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

export const SobreMi = () => {

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

    return (
        <div id="sobreMi" className="h-screen flex justify-center bg-[#1b1b1b] border-t-4 border-[#1b1b1b]">
            <div className="h-[90%] w-[85%] bg-[#acfdb0] flex flex-col rounded-b-[45px] pt-[150px]">

             
               
                <div className="flex justify-center items-start w-full h-[80%] rounded-b-[45px] font-montserrat font-normal">
                    
                    <div className="w-[50%] h-full content-center justify-center flex-wrap text-start p-[100px] flex flex-col gap-[50px] text-xl ">
                        <div className="border-8 border-black p-24 flex flex-col gap-3 rounded-[50px] bg-white border-double ">
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
                        <div className="flex flex-col h-full w-[90%] justify-evenly gap-10 items-center font-montserrat bg-black m-6 rounded-[50px]">
                            <h1 className="font-bold text-white"> Desarrollador web Full Stack</h1>

                            <div className="flex flex-wrap gap-10 items-center justify-center w-[500px] ">
                                {
                                    iconosDev.map((Icono, index) => {
                                        const iconoInfo = nombreIconos.find((def) => def.id === index);
                                        const nombre = iconoInfo ? iconoInfo.name : '';
                                        return <div className="flex flex-col" key={index}>
                                            <p className="text-white z-10">{nombre}</p>
                                            <Icono className="h-[80px] w-[80px] hover:scale-125 transition-all text-white"/>
                                        </div> 
                                    })
                                }

                            </div>

                        </div>
                    </div>
                </div>

                <div className="h-[20%]">
                    <NavAbout />
                </div>


               
            </div>
        </div>
    )
}





