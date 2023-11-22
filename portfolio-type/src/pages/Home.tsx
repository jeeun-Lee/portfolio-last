import {ReactComponent as Wave} from "../assets/wave.svg";
import {styled,keyframes} from "styled-components";
import {gsap} from "gsap";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Default, Desktop, Mobile, Tablet } from "../media";

const WaveAni = styled(Wave)`
    display: block;
   stroke: #ddd;
   stroke-width: 2;
   fill: #ddd;
   overflow: hidden;
`
const Circle = styled.div`
    width: 150px;
    height: 150px;
    background-color: #BCD041;
    border-radius: 50%;
    position: absolute;
    z-index:1;
    animation:jello-vertical 1s 1s both;
`

function Home() {
    const [xy,setXY]=useState({x:0,y:0});
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
            yoyo:true
           })
        gsap.to(".waveBox",{
            duration: 2,
            delay: 1,
            height : 0
        })

    },[]);
    return (
        <div>
            <div className="Wrapper" onMouseMove={mouseMove}>
                <h1>Hello</h1>
                <h2 className="title">Welcome <span>Je protfolio</span></h2>
                <div className="svg-wrap">
                    <WaveAni />
                    <div className="waveBox"></div>   
                </div>

                <div className="card-wrap">
                    <div className="card">
                        <p>안녕하세요~ :D 이제은이라고 합니다.<br />
                            이곳은 제가 가진 스킬과 그동안 작업했던 프로젝트들을 보여드리고 있습니다.<br />
                            잘 부탁드립니다!
                        </p>    
                    </div> 
                    <Circle style={{left: `${(xy.x)/(-30)}px`, top: `${(xy.y)/(-30)}px`}} />
                </div>

               
            </div>

        </div>
    )
}
export default Home;