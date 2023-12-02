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
    const [Skill,setSkill] =useState([]);
    const SkillData = async() =>{
        const response = await fetch(`https://raw.githubusercontent.com/jeeun-Lee/portfolio-last/master/portfolio-type/src/assets/skill.json`);
        const json = await response.json();
        setSkill(json)
    }
    useEffect(()=>{
        SkillData();
        
    },[])
    
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
                        Skill.map((item:skillprops)=>(
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