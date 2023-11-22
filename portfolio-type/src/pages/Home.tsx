import {ReactComponent as Wave} from "../assets/wave.svg";
import {styled,keyframes} from "styled-components";
import {gsap} from "gsap";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Default, Desktop, Mobile, Tablet } from "../media";
import Skill from "./Skill";
import Card from "./Card";

const WaveAni = styled(Wave)`
    display: block;
   stroke: #ddd;
   stroke-width: 2;
   fill: #ddd;
   overflow: hidden;
`


function Home() {
    const [xy,setXY]=useState({x:0,y:0});
    const mouseMove = (event : React.MouseEvent) =>{
        setXY({x: event.pageX, y : event.pageY})
    };
    const wrapRef = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
        console.log(wrapRef.current?.offsetHeight)
        gsap.to(".waveBox", {
           
            scrollTrigger: {
            trigger: '.waveBox',//객체기준범위
                end: wrapRef.current?.offsetHeight,
              scrub: 1,//부드러운 스크러빙
              markers: true,//개발가이드선
              
            },
            y: 200,
          });
        gsap.to("path", 2, {
            attr:{
             d:"M0 120 Q360 180 720 120 T 1440 120 V240 H0 Z"
            },
            ease: "Power1.inOut",
            repeat:-1,
            yoyo:true
           })
        gsap.to(".svg-wrap",{
            duration: 2,
            delay: 1,
            bottom :0
        })
       
    },[]);
    return (
        <div>
            <Card x= {xy.x} y = {xy.y}  />
            <section onMouseMove={mouseMove}  ref={wrapRef}>
                <div className="Wrapper">
                    <h1>Hello</h1>
                    <h2 className="title">Welcome <span>Je protfolio</span></h2>
                </div>

                <div className="svg-wrap">
                        <WaveAni />
                        <div className="waveBox"></div>   
                    </div>
                    
                
            </section>
           <Skill />

        </div>
    )
}
export default Home;