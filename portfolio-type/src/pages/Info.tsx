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
    useEffect(()=>{
      
        const inText = document.querySelectorAll(".inText")  as NodeListOf<HTMLSpanElement>;
        inText.forEach((inText)=> {
            const ThisText = inText.innerText as string | null;
            if (ThisText) {
                inText.setAttribute('data-text', ThisText);
            }
        })
    },[])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleScroll)
      };
      
    }, []);

    return(
        <section id="Info" data-aos="fade-up" data-aos-offset="0" className="TopLink" ref={el4} style={{backgroundColor: "#95CE9E"}}>
            <Bg>
                <div className="wrap-1400" >

                </div>
        </Bg>
        </section>
        
    )
}
export default Info;