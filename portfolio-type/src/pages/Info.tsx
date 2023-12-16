import { useEffect, useRef } from "react";
import {styled} from "styled-components";

const Title = styled.div`
    width: 100%;
    font-size: 50px;
    text-align: center;
    @media (max-width:768px) {
        font-size: 10vw;
    }

`

const P_text = styled.p`
    font-size: 18px;
`

function Info() {
    useEffect(()=>{
        const inText = document.querySelectorAll(".inText")  as NodeListOf<HTMLSpanElement>;
        inText.forEach((inText)=> {
            const ThisText = inText.innerText as string | null;
            if (ThisText) {
                inText.setAttribute('data-text', ThisText);
            }
        })
    },[])

    return(
        <section className="info" style={{
            backgroundColor:"#BCD041",padding:"250px 0"
        }}>
            <div className="wrap-1400" style={{position: `relative`}} >
            <Title>
                <h1 className="info-title en">
               <span className="inText">Thank you</span>  <br />
                For <span className="inText swing">Watching!</span>
                </h1>
            <P_text>
                
                    Github : <br />
                    e-mail:
            </P_text>
            
            </Title>
           
        </div>
        </section>
        
    )
}
export default Info;