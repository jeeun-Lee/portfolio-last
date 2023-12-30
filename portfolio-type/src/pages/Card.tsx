import { createElement, useEffect, useState } from "react";
import { Default, Desktop, Mobile, Tablet } from "../media";

import Weather from "./Weather";
import {styled,keyframes} from "styled-components";
import my from "../assets/images/myPic.gif";
import "./Card.css"
const Circle = styled.div`
    width: 150px;
    height: 150px;
    background-color: #fff;
    border:2px solid #ddd;
    border-radius: 50%;
    position: absolute;
    z-index:-1;
    left: -40px;
    top: -30px;
    animation: slowShake 4s 1s infinite alternate-reverse;
    @media (max-width:1400px) {
       display: none;
    }
    @keyframes slowShake{
        0%{
            left: -40px;
            top: -30px;
        }
        25%{
            left: -50px;
            top: -40px;
        }
        50%{
            left: -40px;
            top: -30px;
          
        }
        75%{
            left: -50px;
            top: -40px;
        }
        100%{
            left: -60px;
            top: -50px;
        }
    }
`

const ClickTextDiv = styled.div`
    text-align: center;
    background-color: #fff;
    position: fixed;
    top: 150px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 50%;
    transition: .3s;
    opacity: 0;
    transform: translateY(10px);
    overflow: hidden;
    &.clicked{
        opacity: 1;
        transform: translateY(0);
    }
    & img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70px;
    }
`


function Card(){
   
    const [isClick,setIsClick] = useState(false);
    const Click = () =>{
        setIsClick(!isClick)
    }

    return(
        <div className="card-wrap" onClick={Click}> 
        <div className={`card`} >
            <div className="Pic-wrap">
                <img src={my} alt="my" className="img-fluid" />
              
                <p className="card_txt">
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
                <Circle >
                    <Weather />
                </Circle>
           </Desktop>

           <Mobile>
                <ClickTextDiv className={`en ${isClick ? "clicked" : ""}`}>
                    <Weather />
                </ClickTextDiv>
            </Mobile>
        </div> 
         
    </div>

    )
}
export default Card;