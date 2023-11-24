
import {styled,keyframes} from "styled-components";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Default, Desktop, Mobile, Tablet } from "../media";
import Skill from "./Skill";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);



function Home() {
    const [xy,setXY]=useState({x:200,y:200});
    const mouseMove = (event : React.MouseEvent) =>{
        setXY({x: event.pageX, y : event.pageY})
    };
   
    useEffect(() => {


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
        //    backgroundColor:"#fff",
            scrollTrigger:{
                trigger:".Skill",
               // markers:true,
                start:"top 15%",
                end: "top 30%",
                
                toggleActions: "play none reverse none"
            }
        })
       
    },[]);
    return (
        <div>
            <Card x= {xy.x} y = {xy.y}  />
            <section onMouseMove={mouseMove}>
                <div className="Wrapper">
                    <h1 className="hi">Hello</h1>
                    <h2 className="title">Welcome <span>Je protfolio</span></h2>
                </div>
            </section>
           <Skill />

        </div>
    )
}
export default Home;