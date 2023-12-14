
import {styled,keyframes} from "styled-components";
import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import { Default, Desktop, Mobile, Tablet } from "../media";
import Skill from "./Skill";
import Card from "./Card";
import Project from "./Project";
import Info from './Info';

gsap.registerPlugin(ScrollTrigger);


function Home() {

   const [projectHeight,setProjectHeight] = useState<number| undefined>(undefined);
    
    const [xy,setXY]=useState({x:200,y:200});
    const mouseMove = (event : React.MouseEvent) =>{
        setXY({x: event.pageX, y : event.pageY})
    };
    const El = document.getElementById("project");
    const El_top = El?.offsetTop;
    const El_skill = document.getElementById("skill_position");
    const El_skill_top = El_skill?.offsetTop;

  useEffect(() => {
    AOS.init();

      setProjectHeight(El_top)

        gsap.to("path", 2, {
            attr:{
             d:"M0 120 Q360 180 720 120 T 1440 120 V240 H0 Z"
            },
            ease: "Power1.inOut",
            repeat:-1,
            yoyo:true,
           
           })

        gsap.to(".Skill",{
            duration: 1,
            
            scrollTrigger:{
                trigger:".Skill",
                start:"top 15%",
                end: "top 30%",
                toggleActions: "play none reverse none"
            }
        })
        gsap.to(".card",{
            duration: 0.1,
            scrollTrigger:{
                trigger:"#skill_position",
                start:`${El_skill_top}px center`, 
                end: "110% center",   
                toggleActions: "restart none none restart",
                toggleClass:{targets:'.card',className:'card-active'},
                
            }
        })
        gsap.to(".card-wrap",{
            duration: 0.1,
           display : "none",
           opacity: 0,
            scrollTrigger:{
                trigger:"#project",
                start:`${projectHeight}px center`, 
				end: "60% center",   
                toggleActions: "restart none none reverse"
            }
        })
        gsap.to([".info-title",".info-title span"],{
            duration: 0.1,
            scrollTrigger:{
                trigger:".info",
                start:"top 15%",
                end: "bottom 30%",
                toggleActions: "play none reverse none",
                toggleClass:{className:'active', targets: ".info-title, .info-title span" },
            }
        })
    
    },[]);
    return (
         <div onMouseMove={mouseMove}>
            <Card x= {xy.x} y = {xy.y}  />
            <section className="home">
                <div className="wrap-1400">
                    <h1 className="hi en">Hello</h1>
                    <h2 className="title en">Welcome <span>Je protfolio</span></h2>
                </div>
            </section>
           <Skill />
            <Project />
            <Info  /> 
        </div>
       
    )
}
export default Home;