import {styled,keyframes} from "styled-components";
import {ReactComponent as Wave} from "../assets/wave.svg";
const WaveAni = styled(Wave)`
    display: block;
   stroke: #ddd;
   stroke-width: 2;
   fill: #ddd;
   overflow: hidden;
`
interface skillprops {
    skill : string,
    level : number,
    opinion ?: string
}

const SkillData : skillprops[]=[
    {
        skill: "HTML/CSS",
        level : 100,  
        opinion : "웹 표준성/접근성 및 애니메이션 작업에 능숙합니다."
    },
    {
        skill: "JavaScript",
        level : 70,  
        opinion : "바닐라 자바스크립트를 이용한 이벤트 작업을 할 수 있습니다."
    },
    {
        skill: "jQuery",
        level : 80,  
        opinion : "이벤트 및 데이터 출력, 플러그인 사용 등을 작업했습니다."
    },
    {
        skill: "REACTJS",
        level : 60,  
        opinion : "hook을 이용해 데이터 입·출력 할 수 있습니다."
    },
    {
        skill: "TypeScript",
        level : 50,  
        opinion : "타입 지정 및 정의 파일을 작업합니다."
    },
    {
        skill: "Git",
        level : 40,  
        opinion : "Github를 통해 협업 활동을 했습니다."
    },
    {
        skill: "PhotoShop",
        level : 40,  
        opinion : "이미지 편집 등을 했습니다."
    },
    

]

function Skill(){
    return(
        <section className="Skill" style={{height:`800px`}}>
               <div className="svg-wrap">
                        <WaveAni />
                </div>
            <div className="Skill-wrap">
                <ul>
                  {
                    SkillData.map((item:skillprops,index :number)=>(
                        <li>{item.skill},{item.level},{item.opinion}</li>
                        
                    ))
                  }
                </ul>
            </div>
        </section>
    )
}
export default Skill;