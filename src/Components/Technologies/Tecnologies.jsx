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

export const Technologies = () => {
    const tecnologías = useSelector((state) => state.storage.skills)

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
        { id: 0, name: 'JavaScript' },
        { id: 1, name: 'Bootstrap' },
        { id: 2, name: 'GitHub' },
        { id: 3, name: 'NodeJS' },
        { id: 4, name: 'Postgresql' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Html' },
        { id: 7, name: 'Git' },
        { id: 8, name: 'VisualStudio' }
    ]
    return (
        <div id="Technologies" className="md:w-3/4 h-[80vh] flex items-center justify-center flex-wrap bg-white">
            {tecnologías && <div className="flex flex-col flex-wrap h-[600px] sm:h-96 w-auto justify-center p-5 items-center font-montserrat  border-8 border-double shadow-xl lg:w-3/4 gap-5">
                <h1 className="font-bold text-[#1b1b1b] text-center text-2xl"> Desarrollador web <br className="sm:hidden" /> Full Stack</h1>

                <div className="flex flex-wrap gap-5 items-center justify-center">
                    {
                        iconosDev.map((Icono, index) => {
                            const iconoInfo = nombreIconos.find((def) => def.id === index);
                            const nombre = iconoInfo ? iconoInfo.name : '';
                            return <div className="flex flex-col justify-center items-center h-auto w-auto" key={index}>
                                <p className="text-[#1b1b1b]">{nombre}</p>
                                <Icono className="h-[60px] w-[60px] hover:scale-125 transition-all text-[#1b1b1b]" />
                            </div>
                        })
                    }

                </div>
            </div>}

        </div>
    )
}