import { useEffect, useLayoutEffect, useRef } from "react";
import {styled} from "styled-components";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);
const Bg = styled.div`
    background-color:#95CE9E;
    height: 100vh;
`

const Title = styled.div`
    width: 100%;
    font-size: 50px;
    text-align: center;
    @media (max-width:768px) {
        font-size: 8vw;
    }

`

function Info({el4} : any) {
    const handleScroll = () => {
        const Title = document.querySelector(".Title_wrap");
        const InfoC = el4.current;
       if(InfoC){
           if(InfoC.className.includes("aos-animate")){
                Title?.classList.add("style")
           }else{
            Title?.classList.remove("style")
           }
       }
    };
    // useEffect(()=>{
      
    //     const inText = document.querySelectorAll(".inText")  as NodeListOf<HTMLSpanElement>; //해당 클래스 초기화
    //     inText.forEach((inText)=> {
    //         const ThisText = inText.innerText as string | null; 클래스 내의 텍스트 저장
    //         if (ThisText) {
    //             inText.setAttribute('data-text', ThisText); 속성값에 추출한 텍스트 저장
    //         }
    //     })
    // },[])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleScroll)
      };
      
    }, []);

    return(
        <section id="Info" ref={el4} data-aos="fade-up" className="TopLink" style={{backgroundColor: "#95CE9E"}}> 
        
            <Bg>
                <div className="wrap-1400" >

                </div>
        </Bg>
        </section>
        
    )
}
export default Info;