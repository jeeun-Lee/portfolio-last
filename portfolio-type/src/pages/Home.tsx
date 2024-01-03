
import {gsap} from "gsap";
import Header from "../components/Header";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import Skill from "./Skill";
import Card from "./Card";
// import Project from "./Project";
import Project2 from "./Project2";
import Info from './Info';

gsap.registerPlugin(ScrollTrigger);


function Home() {
    
    const mq = window.matchMedia("(max-width:1400px)");
  //  const mq_min = window.matchMedia("(min-width:1400px)");
    

    const El_skill = document.getElementById("skill_position");
    const El_skill_top = El_skill?.offsetTop;


    const El = document.getElementById("project");
    const [projectHeight,setProjectHeight] = useState<number| undefined>(undefined);
      

    const reSize = () =>{
        const El_top = El?.offsetTop;
        setProjectHeight(El_top)

        if(mq.matches){
            gsap.to(".card-wrap",{
                duration: 0.1,
                display:"none",
                opacity: 0,
                scrollTrigger:{
                    trigger:"#project",
                    start:`${projectHeight}px 10%`, 
                    end: "60% center",   
                    toggleActions: "restart none none reverse",
                }
            })
        }else{
            gsap.to(".card-wrap",{
                duration: 0.1,
                display:"none",
                opacity: 0,
                scrollTrigger:{
                    trigger:"#project",
                    start:`${projectHeight}px center`, 
                    end: "60% center",   
                    toggleActions: "restart none none reverse",
                    
                }
            })
        }
    }
  useEffect(() => {
    AOS.init();
        
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
                
                toggleActions: "restart none none restart",
                toggleClass:{targets:'.card',className:'card-active'},
            }
        })
      
        gsap.to([".info-title",".info-title span.swing"],{
            duration: 0.1,
            scrollTrigger:{
                trigger:".info",
                start:"top 15%",
                end: "bottom 30%",
                toggleActions: "play none reverse none",
                toggleClass:{className:'active', targets: ".info-title, .info-title span.swing" },
            }
        })
        const handleResize = () => {
            reSize();
        };
        window.addEventListener("load",handleResize)
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("load",handleResize)
            window.removeEventListener("resize", handleResize);
        };
    },  [projectHeight, El_skill_top]);
    return (
        <div>
             <Header />
            <Card />
            <section className="home">
                <div className="wrap-1400">
                    <h1 className="hi en">Hello</h1>
                    <h2 className="title en">Welcome <span>Je protfolio</span></h2>
                </div>
            </section>
           <Skill />
            <Project2 />
            <Info  /> 
        </div>
       
    )
}
export default Home;