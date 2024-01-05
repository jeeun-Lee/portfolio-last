import "./Main.css";

import {styled} from "styled-components";
import { useEffect, useState } from "react";

const CircleBg = styled.div`
    width: 100%;
    max-width: 1400px;
    height:800px;
    background-color: #95CE9E;
    border-radius: 555px;
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);
    transition: .5s;
    &.active{
        max-width: 100%;
        height: 100%;
        bottom: 0;
        border-radius: 0;
    }
    @media(max-width:1400px){
        
        border-radius: 555px 555px 0 0;
    }
    @media(max-width:768px){
        height: 700px;
    }
`
const InfoT = styled.div`
     margin-top: 50px;
     & p{
        font-size: 15px ;
        font-weight: 400;
        line-height: 1.5;
     }
`
// const randomNumber = (max:number, min:number)=>{
//    return Number(Math.random() * (max-min+1) + min);
// }
function Main({el1} : any){
    const [isZoom, setIsZoom] = useState(true);

    const handleScroll = () => {
        const scrolled = window.scrollY;
      if (scrolled > 0) {
        setIsZoom(false);
        } else {
        setIsZoom(true);
      }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      
    }, []);

    return(
        <>
        <section id="Main"  ref={el1}>
                <div className={`Title_wrap ${isZoom ? '' : 'scroll'}`}>
                    <h1 className=" noinfo">
                    변화무쌍 IT 산업에 <br />  주도적으로 대응하는 <br />   성장형 프론트 엔드 개발자
                    </h1>
                    <h1 className="en infoTxt">
                       Thank you for Watching!
                        <span>
                            살펴주셔서 감사합니다!
                        </span>
                        <InfoT>
                            <p>
                                작업관련 코드는 깃허브를 클릭해주세요.<br />
                                연락은 이메일로 메일 부탁드립니다. 
                            </p>
                        </InfoT>
                    </h1>
                </div>
   
            <CircleBg id="circleBg" className={`${isZoom ? '' : 'active'}`}>
                <div className="txt_wrap">
                    <h6>
                        안녕하세요~ :D 이제은이라고 합니다. <br />
                        이곳은 제가 가진 스킬과 그동안 작업했던 프로젝트들을 보여드리고 있습니다. <br />
                        잘 부탁드립니다!
                    </h6>
                </div>
                <div className="img_wrap">
                    <img src={process.env.PUBLIC_URL + `/images/my1.gif`} alt="" className="img-fluid-block"/>
                </div>
            </CircleBg>

        </section>
        </>
    )
}   
export default Main;