import  { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Project() {
  
    return(
        <>
            <Swiper 
             modules={[Navigation,Pagination,Scrollbar]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
           
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide style={{height: `600px`,backgroundColor : `#ddd`}}>Slide 1</SwiperSlide>
            <SwiperSlide style={{height: `600px`,backgroundColor : `#ddd`}}>Slide 2</SwiperSlide>
            <SwiperSlide style={{height: `600px`,backgroundColor : `#ddd`}}>Slide 3</SwiperSlide>
            {/* Add more slides as needed */}
            </Swiper>
        </>
    )
}   
export default Project;