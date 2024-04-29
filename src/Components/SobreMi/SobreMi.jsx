import { Route, Routes } from "react-router-dom"
import { NavAbout } from "./NavAbout"

export const SobreMi = () => {

    return (
        <div id="sobreMi" className="h-screen flex justify-center bg-[#1b1b1b]">
            <div className="h-[80%] w-[85%] bg-[#acfdb0] flex flex-col rounded-b-[45px]">

                <div className="h-[20%]">
                    <NavAbout />
                </div>
               
                <div className="flex flex-col justify-center items-start w-full h-[80%] rounded-b-[45px] font-montserrat font-normal bg-slate-300">
                    <div className="w-[50%] bg-green-300 h-full content-center justify-center flex-wrap text-start p-[100px] flex flex-col gap-5">
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

                    <div>
                        <Routes>
                                <Route>
                                    
                                </Route>
                        </Routes>
                    </div>
                </div>


               
            </div>
        </div>
    )
}





