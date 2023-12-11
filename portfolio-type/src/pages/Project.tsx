import  { useEffect, useRef, useState } from "react";
import projectData from "../assets/ProjectDb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useParams } from "react-router-dom";
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
                modules={[Navigation,Pagination,Autoplay]}
                spaceBetween={35}
                speed={700}
              //  autoplay={{ delay: 2000, disableOnInteraction: false  }}
                loop
                
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
                        slidesPerView :3.05
                    },
                    768: {
                        slidesPerView : 1
                    }
                }}
            
                onSlideChange={() => console.log('slide change')}
                >
                {project?.map((item)=>(
                     <SwiperSlide  key={item.id}>
                        <Link to={item.url} target="_blank">
                        
                        <div className="img-wrap">
                            <img src={process.env.PUBLIC_URL + `/images/pr${item.id}.png`} alt="" />
                        </div>
                        <div className="txt-wrap">
                            <h4 className="project_title">{item.project_title}</h4>
                            <p className="txt_type">{item.type}</p>
                            <p className="txt_detail">{item.detail}</p>
                            <p className="txt_tags">{item.tag.map((tags,index)=>(<span className="en" key={index}>{tags} </span>))}</p>
                        </div>
                        </Link>
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