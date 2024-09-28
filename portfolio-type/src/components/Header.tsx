import { useEffect, useState } from "react";
import {styled} from "styled-components";

const Header_box = styled.div`
        font-size: 13px;
        color: #aaa;
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 1;
        overflow-x: hidden;
        z-index: 99999;
        visibility: visible;
        &.hidden{
            transition: .3s;
            opacity: 0;
            visibility: hidden;
        }

    `
function Header(): JSX.Element {

        const [isBoxVisible, setIsBoxVisible] = useState(true);

        const handleScroll = () => {
            const scrolled = window.scrollY;
          if (scrolled > 0) {
            setIsBoxVisible(false);
            } else {
            setIsBoxVisible(true);
          }
        };
      
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
    return(
        <Header_box  className={`${isBoxVisible ? 'visible' : 'hidden'}`}>
            <header>
                <p>· 크롬 브라우저로 확인하는 것을 권고드립니다.</p>
            </header>
        </Header_box>
        
    )
}
export default Header;