import { useRef } from "react";

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