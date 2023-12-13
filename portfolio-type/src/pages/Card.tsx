import { useState } from "react";
import {styled,keyframes} from "styled-components";
import my from "../assets/images/myPic.gif";
import "./Card.css"
const Circle = styled.div`
    width: 150px;
    height: 150px;
    background-color: #BCD041;
    border-radius: 50%;
    position: absolute;
    z-index:-1;
    animation:jello-vertical 1s 1s both infinite;
`

function Card({x,y} : {x:number; y:number}){
    
    return(
        <div className="card-wrap">
        <div className="card">
            <div className="Pic-wrap">
                <img src={my} alt="my" className="img-fluid" />
                <p>
                안녕하세요~ :D 이제은이라고 합니다.<br />
                이곳은 제가 가진 스킬과 그동안 작업했던 프로젝트들을 보여드리고 있습니다.<br />
                잘 부탁드립니다!
                </p>    
                <p className="skill">
                    공부와 일로 습득한 저의 스킬입니다. <br />
                    아직 부족하지만 꾸준히 발전 중입니다:D 
                </p>    
            </div>
           
            <Circle style={{left: `${(x)/(-15)}px`, top: `${(y)/(-15)}px`}} />
        </div> 
    </div>

    )
}
export default Card;