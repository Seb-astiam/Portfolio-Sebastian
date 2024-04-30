import { Link } from "react-router-dom";

export const NavAbout = () => {

    const navigation = [
        { name: 'Skills', href: '#sobreMi' },
        { name: 'Features', href: '/features' },
        { name: 'Marketplace', href: '/marketplace' },
    ];

    return (
        <div id="NavAbout" className="flex items-center flex-wrap justify-around h-full">
            <div className="text-4xl font-bold">
                <h1>Sobre Mi</h1>
            </div>

            <div className="flex gap-5">
                {navigation.map((ruta, index) => {
                    return (       
                        <Link
                            key={index}
                            to={ruta.href}
                            className="py-4 px-14  text-white border border-white bg-[#1b1b1b] cursor-pointer shadow-custom
                            hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hoverCustom transition-all hover:text-[#44f814] 
                            focus:translate-x-[4px] focus:translate-y-[4px] focus:bg-[#acfdb0] focus:border-white focus:border-3 focus:text-[#1b1b1b] focus:shadow-hoverCustom rounded-[20px]"
                        >
                            {ruta.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}





