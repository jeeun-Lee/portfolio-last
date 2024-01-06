

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Header from "../components/Header";
import Main from "./Main";
import Skill from "./Skill";
import Project from "./Project2";
import Info from './Info';
import SideBar from '../components/SideBar';
import "../assets/noAos.css";

import useNavScroll from "../nav";
import About from "./About";

function Home() {
    const el1 = useNavScroll();
    const el2 = useNavScroll();
    const el3 = useNavScroll();
    const el4 = useNavScroll();
    const element = [el1,el2,el3,el4];
    
    useEffect(() => {
        AOS.init();
       
        }, );
    return (
        <>
            <Header></Header>
            <SideBar element={element}></SideBar>
            <Main el1 ={el1.element}></Main>
            <About></About>
            <Skill el2 ={el2.element}></Skill>
            <Project el3 ={el3.element}></Project>
            <Info el4 ={el4.element}></Info>
        </>
       
    )
}
export default Home;