import  { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Project() {
   
    return(
        <section className="project">
        <div className="wrap-1400">
            <Swiper 
                modules={[Navigation,Pagination]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                
                breakpoints={{
                    1210: {
                        slidesPerView : 3
                    },
                    768: {
                        slidesPerView : 1
                    }
                }}
            
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide style={{height: `400px`,backgroundColor : `#ddd`}}>Slide 1</SwiperSlide>
                <SwiperSlide style={{height: `400px`,backgroundColor : `#ddd`}}>Slide 2</SwiperSlide>
                <SwiperSlide style={{height: `400px`,backgroundColor : `#ddd`}}>Slide 3</SwiperSlide>
                <SwiperSlide style={{height: `400px`,backgroundColor : `#ddd`}}>Slide 4</SwiperSlide>
                <SwiperSlide style={{height: `400px`,backgroundColor : `#ddd`}}>Slide 5</SwiperSlide>
                <SwiperSlide style={{height: `400px`,backgroundColor : `#ddd`}}>Slide 6</SwiperSlide>
                {/* Add more slides as needed */}
                </Swiper>
        </div>
            
        </section>
    )
}   
export default Project;