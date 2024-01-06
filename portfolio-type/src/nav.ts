import { useRef } from "react";

// nav 클릭시 해당 컴포넌트로 스크롤 이동.

const useNavScroll = () =>{
    const element = useRef<HTMLElement>(null); 
    const onMoveEl =() =>{
        element.current?.scrollIntoView({behavior:"smooth",block:"start"})
    };
    return{
        element, onMoveEl
    }
}
export default useNavScroll;