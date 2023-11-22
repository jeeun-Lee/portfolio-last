import { useState } from "react";
import {styled,keyframes} from "styled-components";

const Circle = styled.div`
    width: 150px;
    height: 150px;
    background-color: #BCD041;
    border-radius: 50%;
    position: absolute;
    z-index:1;
    animation:jello-vertical 1s 1s both;
`
function Card({x,y} : {x:number; y:number}){
    
    return(
        <div className="card-wrap">
        <div className="card">
            <p>안녕하세요~ :D 이제은이라고 합니다.<br />
                이곳은 제가 가진 스킬과 그동안 작업했던 프로젝트들을 보여드리고 있습니다.<br />
                잘 부탁드립니다!
            </p>    
        </div> 
        <Circle style={{left: `${(x)/(-30)}px`, top: `${(y)/(-30)}px`}} />
    </div>

    )
}
export default Card;