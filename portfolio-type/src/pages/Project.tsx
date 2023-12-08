import  { useEffect, useRef, useState } from "react";
import projectData from "../assets/ProjectDb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from "react-router-dom";
import img from "../assets/images/pr1.png";
import "./Project.css";
import { relative } from "path";
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
           
        <div className="wrap-1400" style={{position:"relative"}}>
            <Swiper
                modules={[Navigation,Pagination]}
                simulateTouch={false}
                spaceBetween={20}
                navigation={{
                    prevEl:".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                }}
                pagination={{
                    el : ".pagin",
                    dynamicBullets: true
                  }}
                breakpoints={{
                    1210: {
                        slidesPerView :3
                    },
                    768: {
                        slidesPerView : 1
                    }
                }}
            
                onSlideChange={() => console.log('slide change')}
                >
                {project?.map((item)=>(
                     <SwiperSlide  key={item.id}>
                        <div className="img-wrap">
                            <img src={process.env.PUBLIC_URL + `/images/pr${item.id}.png`} alt="" />
                        </div>
                        <p>{item.project_title}</p>
                        <p>{item.type}</p>
                        <p>{item.detail}</p>
                        <p>{item.tag.map((tags,index)=>(<span key={index}>{tags} </span>))}</p>
                        <p>{item.url}</p>
                     </SwiperSlide>
                ))}
              
               
                </Swiper>
                <div className="pagin swiper-pagination"></div>
                <div className="swiper_btn_wrap">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
        </div>
            
        </section>
    )
}   
export default Project;