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

const Div_text = styled.div`
    display: flex;

    width: fit-content;
    margin: 0 auto;
    margin-top: 20px;
    & a{
        display: block;
        width: 25px;
        margin: 0 5px;
    }
    & a img{
        display: block;
        max-width: 100%;
        height: auto;
    }
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
            <Div_text>
                <a href="https://github.com/jeeun-Lee" target="_blank">
                    <img src={process.env.PUBLIC_URL + `/images/github.png`} alt="" />
                </a>
                <a href="mailto:batch402@gmail.com" target="_blank">
                    <img src={process.env.PUBLIC_URL + `/images/email.png`} alt="" />
                </a>
            </Div_text>
            
            </Title>
           
        </div>
        </section>
        
    )
}
export default Info;