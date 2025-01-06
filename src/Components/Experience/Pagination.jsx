import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Pagination = ({proyect}) => {



    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            emulateTouch={false}
            swipeable={false}
            className='lg:h-[680px] h-[600px] flex items-center shadow-xl md:w-3/4 w-full  border-double border-8' 
        >
            {proyect.map((proyectSlice, index) => {
                return (

                    <div key={index} className='flex flex-col justify-center items-center '>
                        <h1 className='text-[#1b1b1b] lg:text-3xl md:text-2xl text-xl m-5'>{proyectSlice.name}</h1>
                        <img src={proyectSlice.img} className='lg:h-[400px] 2xl:h-[500px] h-72 md:h-80 m-3 md:m-0'></img>
                        <p className='text-[#1b1b1b] sm:text-lg lg:text-xl text-base m-5'>{proyectSlice.descripción}</p>
                    </div>
                )
            })}
        </Carousel>
    )
}