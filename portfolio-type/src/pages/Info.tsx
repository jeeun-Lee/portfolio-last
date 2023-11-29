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
    return(
        <div className="wrap-1400" style={{position: `relative`}}>
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
    )
}
export default Info;