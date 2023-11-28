import {styled,keyframes} from "styled-components";
import {ReactComponent as Wave} from "../assets/wave.svg";
import { useEffect, useState } from "react";
import "./Skill.css";

const WaveAni = styled(Wave)`
    display: block;
   stroke: #ddd;
   stroke-width: 2;
   fill: #ddd;
   overflow: hidden;
`
interface skillprops {
    id : number,
    skill : string,
    level : number,
    opinion ?: string
}

function Skill(){
    const SkillData : skillprops[]=[
        {
            id :1,
            skill: "HTML/CSS",
            level : 100,  
            opinion : "웹 표준성/접근성 및 애니메이션 작업에 능숙합니다."
        },
        {
            id :2,
            skill: "JavaScript",
            level : 70,  
            opinion : "바닐라 자바스크립트를 이용한 이벤트 작업을 할 수 있습니다."
        },
        {
            id :3,
            skill: "jQuery",
            level : 80,  
            opinion : "이벤트 및 데이터 출력, 플러그인 사용 등을 작업했습니다."
        },
        {
             id :4,
            skill: "REACTJS",
            level : 60,  
            opinion : "hook을 이용해 데이터 입·출력 할 수 있습니다."
        },
        {
             id :5,
            skill: "TypeScript",
            level : 50,  
            opinion : "타입 지정 및 정의 파일을 작업합니다."
        },
        {
             id :6,
            skill: "Git",
            level : 40,  
            opinion : "Github를 통해 협업 활동을 했습니다."
        },
        {
             id :7,
            skill: "PhotoShop",
            level : 40,  
            opinion : "이미지 편집 등을 했습니다."
        },
    
    ]


    return(
        <section className="Skill">
            <div className="svg-wrap">
                     <WaveAni />
            </div>
            <div className="Skill-wrap">
                <div className="wrap-1400">
                    <h1 className="en">Skill Tool</h1>
                    <ul className="skill-list">
                    {
                        SkillData.map((item:skillprops)=>(
                            <li key={item.id}>
                                <div className="flex align-items-center">
                                    <h6 className="en">{item.skill}</h6>
                                    <ul  className="flex">
                                        <li className={(item.level <= 100 && item.level > 70) ? "check" : "" }>상</li>
                                        <li className={(item.level <= 70 && item.level >= 50) ? "check" : "" }>중</li>
                                        <li className={(item.level < 50) ? "check" : "" }>하</li>
                                    </ul>
                                    <p>{item.opinion}</p>
                                </div>
                               
                            </li>
                            
                        ))
                    }
                    </ul>
                </div>
            
            </div>
        </section>
    )
}
export default Skill;