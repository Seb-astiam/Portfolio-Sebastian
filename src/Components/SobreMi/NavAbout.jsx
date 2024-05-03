import { Link } from "react-router-dom";
import { changeDivBoscoApp, changeDivPokeApi, changeDivSkills } from "../../Redux/portfolioSlice"
import { useDispatch } from "react-redux";

export const NavAbout = () => {

    const dispatch = useDispatch()

    const navigation = [
        { name: 'Skills' },
        { name: 'BoscoApp' },
        { name: 'PokeApi' },
    ];

    const changeButton = (name) => {
        if(name === 'Skills') dispatch(changeDivSkills(true))
        if(name === 'BoscoApp') dispatch(changeDivBoscoApp(true))
        if(name === 'PokeApi') dispatch(changeDivPokeApi(true))
    }

    return (
        <div id="NavAbout" className="flex items-center flex-wrap justify-around h-full">
            {/* <div className="text-4xl font-bold">
                <h1>Sobre Mi</h1>
            </div> */}

            <div className="flex gap-5">
                {navigation.map((ruta, index) => {
                    return (       
                        <Link
                            key={index}
                            to={ruta.href}
                            onClick={() => changeButton(ruta.name)}
                            className="py-4 px-14  text-white border border-white bg-[#1b1b1b] cursor-pointer shadow-custom
                            hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hoverCustom transition-all hover:text-[#44f814] 
                            focus:translate-x-[4px] focus:translate-y-[4px] focus:bg-black focus:text-[#44f814] focus:shadow-hoverCustom rounded-[20px]"
                        >
                            {ruta.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}





