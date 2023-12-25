import { useEffect } from "react";


function Header(): JSX.Element {

    const header_toggle = document.querySelector("header");
    
    const scrollEvent = () =>{
        const window_top = document.documentElement.scrollTop;
        if(window_top > 0){
            header_toggle?.classList.add("active")
        }else{
            header_toggle?.classList.remove("active")
        }
    
    }


    useEffect(()=>{
        window.addEventListener("scroll",scrollEvent)
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    },[]) 

 
    return(
    <header>
        <p>크롬 브라우저로 확인하는 것을 권고드립니다.</p>
    </header>)
}
export default Header;