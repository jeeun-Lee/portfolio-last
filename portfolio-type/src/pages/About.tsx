import {styled} from "styled-components";

const AboutStyle = styled.section`
    background-color: #95CE9E;
    & .wrap-1400{
        padding-top: 150px;
    }
    & h5{
        font-size: 56px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    & h5 span{
        text-shadow: -1px 0 #111, 0 1px #111, 1px 0 #111, 0 -1px #111;
        color: #fff;
        cursor: default;
        transition: .3s;
        display: inline-block;
        position: relative;
        z-index: 10;
    }
 
    & h5 span:hover{
        
        color: #ee964b;
    }
    & h5 span:first-child:hover{
        color: #f4d35e;
    }
    & h5 span:last-child:hover{
        color: #f95738;
    }

    & p{
        padding-left: 5px;
        line-height: 1.7;
        word-break: keep-all;
    }
    @media (max-width:1400px) {
        & h5{
            font-size: 44px;
        }
    }
    @media (max-width:768px) {
        & h5{
            font-size: 36px;
        }
    }
`
function About(){
    return(
        <>
            <AboutStyle id="About">
                <div className="wrap-1400" data-aos="fade-right">
                    <div>
                        <h5>
                            <span>연마하고</span>, <span>습득하고</span>, <span>발전하는</span> 개발자.
                        </h5>
                        <p>
                        현 개발 트렌드는 변화무쌍하게 발전하고 있습니다. 그렇기에 개발도 그 흐름을 맞춰 가야 한다고 생각합니다. <br />
                            새로운 기술을 습득하고 내 것으로 만들기 위해 연마해 작업에 부여해 더 좋은 프로젝트를 만들어 갑니다 <br />
                            역량이 향상된 스스로 성취감을 느끼기 위해서 오늘도 저는 코딩을 해야 한다는 것이 저의 철학입니다.
                        </p>
                    </div>
                </div>
            </AboutStyle>
        </>
    )
}
export default About;