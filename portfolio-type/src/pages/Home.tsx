
import {styled,keyframes} from "styled-components";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Default, Desktop, Mobile, Tablet } from "../media";
import Skill from "./Skill";
import Card from "./Card";
import Project from "./Project";
import Info from './Info';
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
            <Info />
        </div>
    )
}
export default Home;