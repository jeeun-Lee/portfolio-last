import { createElement, useEffect, useState } from "react";
import { Default, Desktop, Mobile, Tablet } from "../media";
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
    @media (max-width:1400px) {
       display: none;
    }
`

function Card({x,y} : {x:number; y:number}){
    const [isClick,setIsClick] = useState(false);

    const setClick = () =>{
       setIsClick(!isClick);
    }

    return(

        <div className="card-wrap">
        <div className={`card ${isClick? "clicked" : ""}`} onClick={setClick}>
            <div className="Pic-wrap">
                <img src={my} alt="my" className="img-fluid" />
                <p>
                안녕하세요~ :D 이제은이라고 합니다.<br />
                이곳은 제가 가진 스킬과 그동안 작업했던 프로젝트들을 보여드리고 있습니다.<br /><br />
                잘 부탁드립니다!
                </p>    
                <p className="skill">
                    공부와 일로 습득한 저의 스킬입니다. <br /><br />
                    아직 부족하지만 꾸준히 발전 중입니다:D 
                </p>    
            </div>
           <Desktop>
                <Circle style={{left: `${(x)/(-35)}px`, top: `${(y)/(-35)}px`}} />
           </Desktop>
        </div> 
    </div>

    )
}
export default Card;