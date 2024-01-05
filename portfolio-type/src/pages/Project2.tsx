import  { useEffect, useRef, useState } from "react";
import projectData from "../assets/ProjectDb";
import {styled,keyframes} from "styled-components";
import { Link, useParams } from "react-router-dom";

import "./Project2.css";


interface Projectprops {
    id : number,
    project_title : string,
    type : string,
    detail : string,
    percent : string,
    tag : string[],
    url : string
}
const Project_title = styled.h1`
    font-size: 70px;
    margin-bottom: 50px;
    & span{
        display: block;
        font-size: 13px;
        color: #aaa;
        font-weight: 400;
        margin-top: 5px;
    }
`



function Project2({el3} : any) {
    const [project, setProject] = useState<Projectprops[]>([]);

    const mq = window.matchMedia("(max-width:1400px)");
    const mq_mobile = window.matchMedia("(max-width:768px)");

    const reSize = () =>{
        const slideDivs = document.getElementsByClassName('slide');
        const slideArray = Array.from(slideDivs);
    
        slideArray.forEach((slide, index) => {

            const remainder = index % 3;
            slide.setAttribute('data-aos-delay', remainder.toString() + "00")

            if(mq.matches){
                const remainder = index % 2;
                    if(remainder == 0){
                        slide.setAttribute('data-aos-delay', "0")
                    }else{
                        slide.setAttribute('data-aos-delay', "100")
                    }
            }
            if(mq_mobile.matches){
                    slide.setAttribute('data-aos-delay', "0")
            }

            if(slide.getAttribute('data-aos-delay') == "000"){
                slide.setAttribute("data-aos-delay","0")
            }
           
        });

    }
    
  useEffect(() => {
    setProject(projectData);
  }, []);

  useEffect(() => {
    const handleResize = () => {
        reSize();
    };
    window.addEventListener("load",handleResize)
    window.addEventListener("resize", handleResize)
    return()=>{
      
        window.removeEventListener("load",handleResize)
        window.removeEventListener("resize", handleResize);
    
    }
  });


    return(
        <section id="project" data-aos="fade-up" data-aos-offset="500" className="TopLink" data-link="2" ref={el3}>
          
        <div className="wrap-1400">
            <Project_title className="en">Project </Project_title>
                <ul className="d-flex">
                   
                    {project?.map((item)=>(
                        
                         <li className="slide" key={item.id}  data-aos="fade-up">
                         <Link to={item.url} target="_blank"> 
                            
                            <div className="img-wrap">
                                <img src={process.env.PUBLIC_URL + `/images/pr${item.id}.png`} alt={item.project_title} />
                            </div>
                            <div className="txt-wrap">
                                <h4 className="project_title">{item.project_title}</h4>
                                <div className="d-flex">    
                                    <p className="txt_type">{item.type}</p>
                                    <p className="txt_percent">참여도<span>(프론트앤드/퍼블리싱)</span> {item.percent}</p>
                                </div>

                                <p className="txt_tags">{item.tag.map((tags,index)=>(<span className="en" key={index}>{tags} </span>))}</p>
                                <p className="txt_detail">{item.detail}</p>
                            </div>
                            </Link>
                            </li>
                    ))}
              
              </ul>
              
        </div>
            
        </section>
    )
}   
export default Project2;