
import {styled,keyframes} from "styled-components";
import { forwardRef, useEffect, useRef, useState } from "react";
import "./Skill.css";
import { Link } from "react-router-dom";


interface skillprops {
    id : number,
    skill : string,
    level : number,
    opinion ?: string
}

function Skill({el2} : any){

  
    const [Skill,setSkill] =useState([]);
    const SkillData = async() =>{
        const response = await fetch(`https://raw.githubusercontent.com/jeeun-Lee/portfolio-last/master/portfolio-type/src/assets/skill.json`);
        const json = await response.json();
        setSkill(json)
    }
  
    useEffect(() => {
        SkillData();
        
      
     },[]); 

    return( 
        <section id="Skill" data-aos="fade-up"  data-aos-offset="500" className="TopLink" data-link="1" ref={el2}> 
        <Link to="" id="SkillL"> </Link>
            <div className="Skill-wrap">
                <div className="wrap-1400" id="skill_position">
                    <h1 className="en">Skill Tool</h1>

                    <ul className="skill-list">
                    {
                        Skill.map((item:skillprops)=>(
                            <li key={item.id} data-aos="fade-up">
                                <div className="d-flex align-items-center">
                                    <h6 className="en">{item.skill}</h6>
                                    <ul  className="d-flex">
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