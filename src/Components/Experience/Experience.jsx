// PROYECTO BOSCO
const PrincipalBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185669/PrincipalBosco_kalssm.png"
const LoginBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185669/LoginBosco_gxduhh.png"
const HomeBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185668/HomeBosco_j8rdvv.png"
const DetailBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185667/DetailBosco_rfepkj.png"
const RegistroMascotaBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185670/RegistroMascotaBosco_wcqhso.png"
const RegistroAlojamientoBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185669/RegistroAlojamientoBosco_hnkldd.png"
const HistorialReservaBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185668/HistorialReservaBosco_uvmhpn.png"
const RegistroUsuarioBosco = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185670/RegistroUsuarioBosco_m75jsc.png"

// PROYECTO POKEMON
const LandingProyectoPokemon = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736186344/Landing_bh4psw.png"
const HomeProyectoPokemon = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185668/HomeProyectoPokemon_vz3bn2.png"
const DetailProyectoPokemon = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185667/DetailProyectoPokemon_yioopj.png"

// PROYECTO PAGINA SERGIO
const InicioPageSergio = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185668/InicioPageSergio_n4dzja.png";
const ServicioPageSergio = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185670/ServicioPageSergio_mixzvf.png";
const CasosPageSergio = "https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185667/CasosPageSergio_dhfisi.png"

import { Pagination } from "./Pagination"


export const Experience = () => {


    const proyectoBosco = [
        { img: PrincipalBosco, name: "Pagina Principal", descripción: "Página de bienvenida que incluye botones para registrarse o iniciar sesión, muestra alojamientos destacados y brinda información relevante para generar confianza en nuevos usuarios." },
        { img: LoginBosco, name: "Inicio de sesión", descripción: "Pantalla que permite un inicio de sesión rápido mediante Google o Facebook, además de una opción manual. Incluye un enlace para redirigir a la página de registro si no tienes una cuenta." },
        { img: RegistroUsuarioBosco, name: 'Registro de usuario', descripción: "Sección esencial para registrarse en la aplicación, con opciones rápidas de registro a través de Google y Facebook." },
        { img: HomeBosco, name: 'Pagina de inicio', descripción: "Pantalla principal que muestra todos los alojamientos disponibles. Incluye filtros avanzados para personalizar y optimizar la búsqueda del alojamiento ideal." },
        { img: DetailBosco, name: 'Detalle Alojamiento', descripción: "Página individual de cada alojamiento que proporciona detalles completos y un formulario para realizar reservas de manera sencilla." },
        { img: RegistroMascotaBosco, name: 'Registro Mascota', descripción: "Sección dedicada al registro de las mascotas que serán huéspedes en los alojamientos." },
        { img: RegistroAlojamientoBosco, name: 'Registro Alojamiento', descripción: "Formulario diseñado para registrar nuevos alojamientos en la plataforma." },
        { img: HistorialReservaBosco, name: 'Historial de reserva', descripción: "Pantalla que permite consultar el historial completo de todas las reservas realizadas por el usuario." }
    ];
    
    const proyectoPokemon = [
        { img: LandingProyectoPokemon, name: "LandingPage", descripción: "Página inicial de la aplicación con un diseño inspirado en los juegos de Pokémon, que invita al usuario a explorar." },
        { img: HomeProyectoPokemon, name: "HomePage", descripción: "Vista principal que muestra todos los Pokémon obtenidos desde la API, junto con los creados por los usuarios." },
        { img: DetailProyectoPokemon, name: 'DetailPage', descripción: "Página detallada de cada Pokémon que permite navegar entre diferentes Pokémon sin necesidad de abandonar la vista actual." }
    ];
    
    const proyectoSergioOdontologia = [
        { img: InicioPageSergio, name: "Inicio Pagina Sergio", descripción: "Página principal que introduce al consultorio con una presentación profesional y clara." },
        { img: ServicioPageSergio, name: "Servicios Pagina Sergio", descripción: "Sección que detalla los servicios odontológicos ofrecidos por el consultorio, destacando su calidad y especialización." },
        { img: CasosPageSergio, name: "Casos Pagina Sergio", descripción: "Galería interactiva que muestra casos reales, permitiendo al usuario comparar el antes y después mediante un deslizador visual." }
    ];
    



    return (
        <div id="Experience" className="h-auto bg-white sm:w-3/4 w-full flex flex-col items-center justify-center gap-5 pt-32">
            <h1 className="text-center text-[#1b1b1b] text-3xl">
                Experiencia
            </h1>

            <Pagination proyect={proyectoBosco} />
            <Pagination proyect={proyectoPokemon} />
            <Pagination proyect={proyectoSergioOdontologia} />


        </div>
    )
}