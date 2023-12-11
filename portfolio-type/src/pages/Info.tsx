import { useEffect, useRef } from "react";
import {styled} from "styled-components";
const Title = styled.div`
    width: 100%;
    font-size: 50px;
    text-align: center;
`
const P_text = styled.p`
    font-size: 18px;
`
function Info() {
    // const infoH = useRef<HTMLDivElement>(null);
    // const audioh = infoH.current?.offsetTop;

    //   getAudio(audioh);
      
    return(
        <section className="info" style={{
            backgroundColor:"#BCD041",padding:"250px 0"
        }}>
            <div className="wrap-1400" style={{position: `relative`}} >
            <Title>
            <h1>
            Thank you <br />
            For Watching!
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