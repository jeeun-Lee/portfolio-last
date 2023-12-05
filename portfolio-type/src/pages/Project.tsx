import  { useEffect, useRef, useState } from "react";
import projectData from "../assets/ProjectDb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from "react-router-dom";
import img from "../assets/images/pr1.png";

interface Projectprops {
    id : number,
    project_title : string,
    type : string,
    detail : string,
    tag : string[],
    url : string
}

function Project() {
    const [project,setProject]= useState<Projectprops[]>()
    useEffect(() => {

       setProject(projectData)
       
    },[])

    return(
        <section id="project">
           
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
                {project?.map((item)=>(
                     <SwiperSlide  key={item.id}>
                        <img src={process.env.PUBLIC_URL + `/images/pr${item.id}.png`} alt="" />
                        <p>{item.project_title}</p>
                        <p>{item.type}</p>
                        <p>{item.detail}</p>
                        <p>{item.tag.map((tags,index)=>(<span key={index}>{tags} </span>))}</p>
                        <p>{item.url}</p>
                     </SwiperSlide>
                ))}
               
                </Swiper>
        </div>
            
        </section>
    )
}   
export default Project;