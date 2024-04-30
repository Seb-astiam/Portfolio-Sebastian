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

    return (
        <div id="sobreMi" className="h-screen flex justify-center bg-[#1b1b1b] border-t-4 border-[#1b1b1b]">
            <div className="h-[90%] w-[85%] bg-[#acfdb0] flex flex-col rounded-b-[45px] pt-[150px]">

             
               
                <div className="flex justify-center items-start w-full h-[80%] rounded-b-[45px] font-montserrat font-normal">
                    
                    <div className="w-[50%] h-full content-center justify-center flex-wrap text-start p-[100px] flex flex-col gap-[50px] text-xl">
                        <p className="w-full"> 
                            Hola, me llamo <strong>Joan Sebastian Agudelo</strong> Soy programador Full-Stack con formación en Química y Farmacia, 
                            tengo experiencia practica en diversos proyectos utilizando Javascript, Socket.io, postgreSQL entre otras tecnologías, 
                            realizando tareas como chats en tiempo real, funciones lógicas, manejo de información, deploy y más.
                        </p>

                        <p className="w-full"> 
                            Con conocimiento en cloudinary y autenticación de terceros e interes en interiorisarme en AWS, 
                            soy una persona muy disciplinada que mantiene siempre las ganas de seguir aprendiendo para poder aportar valor en los equipos de trabajo 
                            a los cuales pertenezca, ademas de fomentar un clima laboral de compañerismo y buen humor.
                        </p>
                    </div>

                    <div className="w-[50%] h-full content-center justify-center flex-wrap text-xl">
                        <div className="flex flex-col h-full justify-evenly gap-10 items-center font-montserrat">
                            <h1 className="font-bold"> Desarrollador web Full Stack</h1>

                            <div className="flex flex-wrap gap-10 items-center justify-center w-[500px]">
                                {
                                    iconosDev.map((Icono) => {
                                        return <Icono className="h-[80px] w-[80px] hover:scale-125 transition-all"/>
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





