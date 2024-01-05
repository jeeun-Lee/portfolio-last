
import {styled} from "styled-components";
import { Default, Desktop, Mobile, Tablet } from "../media";
import Weather from "../pages/Weather";
import { useState } from "react";
const Div_text = styled.div`
    display: flex;
    width: fit-content;
    position: relative;
    left: -10px;
    top: 10px;
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
    @media(max-width:1400px){
      left: 0;
    top: 0;
    }
`

const SideBar_box = styled.div`
       position: fixed;
       top: 50%;
       left: 5%;
       transform: translateY(-50%);
      z-index: 9999;
       & ul.side li{
        font-size: 18px;
        font-weight: 600;
        padding: 10px;
        position: relative;
        cursor: pointer;
        color: #111;
      }
      & ul.side li::after{
        content: "";
        width: 5px;
        height: 5px;
        background-color: #111;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      @media(max-width:1400px){
        top: 20px;
        right:20px;
        left: auto;
        transform: translateY(0);
        & .side{
          padding: 10px;
        }
        & .mo{
          background-color: #fff;
          border-radius: 20px;
          transition: .3s;
          height: 0;
          overflow: hidden;
        }
        & .mo.open{
          height: 223px;
        }
      }
    `
const Menu = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 30px;
    & span{
      display: block;
      width: 100%;
      height: 3px;
      background-color: #111;
      margin: 5px 0;
    }
    @media(max-width:1400px){
      margin: 0 ;
      margin-top: 20px;
      margin-left: auto;
    }
`
function SideBar({element} : any): JSX.Element {
      const[menu,setMenu] = useState(false);
      const toggleSide = () => { 
        setMenu(menu => !menu);  
      };
      

      const handleListItemClick = (event: React.MouseEvent<HTMLLIElement>) => {

        const clickedLi = event.currentTarget;
        const listItems = document.querySelectorAll(".side li");
        const Skill  = document.getElementById("Skill");
        listItems.forEach((li) => {
          listItems.forEach((li,index) => {
            if (li.contains(clickedLi)) { //클릭요소 포함시 
                element[index].onMoveEl();
             
              li.classList.add("active"); //활성화
            } else {
              li.classList.remove("active"); //비활성화
            }
          });
          li.classList.toggle("active", li === clickedLi);
        });
      };
  

    return(
       <>
              
          <SideBar_box className="sideBar">
            <Weather />
            <Tablet>
              <Menu id="memu" onClick={toggleSide} >
                <span></span>
                <span></span>
                <span></span>
              </Menu>
            </Tablet>
            <div className={`mo ${menu ? "open" : ""}`}>
              <ul className={`side`}>
                <li className="en active" onClick={handleListItemClick}>Main</li>
                <li className="en"  onClick={handleListItemClick}>Skill</li>
                <li className="en"  onClick={handleListItemClick}>Project</li>
                <li className="en"  onClick={handleListItemClick}>Info</li>
              </ul>
              <Div_text>
                      <a href="https://github.com/jeeun-Lee" target="_blank">
                          <img src={process.env.PUBLIC_URL + `/images/github.png`} alt="" />
                      </a>
                      <a href="mailto:batch402@gmail.com" target="_blank">
                          <img src={process.env.PUBLIC_URL + `/images/email.png`} alt="" />
                      </a>
              </Div_text>
            </div>
         
          </SideBar_box>
          
                
       </>
        
    )
}
export default SideBar;