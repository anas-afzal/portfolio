import React, { useMemo, useState } from 'react';
import MobileNavbar from './MobileNavbar';
import gsap from 'gsap/all';

const Header : React.FC = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const tl = useMemo(() => gsap.timeline({paused: true}),[]);

    const openMenu = () => {
        setMenuToggle((menuToggle) => !menuToggle);
        tl.to(".menu-bar-1", {rotation: 45, margin:0, backgroundColor: "black", duration:0.3});
        tl.to(".menu-bar-2", {rotation: -45, margin: 0, width: "2rem", backgroundColor: "black", duration:0.3},"<");
        tl.play();
    }

    const closeMenu = () => {
        tl.reverse();
        gsap.timeline()
        .to(".nav-link", {opacity:0, x:"-100%",stagger:0.1, duration:0.2})
        .to(".mobile-nav", {x:"-100%", duration: 0.5, onComplete: toggle})  
    }

    const toggle = () => {
        setMenuToggle((menuToggle) => !menuToggle);
    }

    const menuMouseHover = () => {
        gsap.to(".nav-link-1", {color: "blue"})
    }

    return (
        <div className = "relative">
            {menuToggle && (
                <MobileNavbar/>
            )}
            <div className = "flex h-20 sticky z-40">
                <button className = " ml-5 my-auto h-8 w-12" onClick = {menuToggle ? closeMenu : openMenu} >
                    <span className = "w-8 h-0.5 bg-black menu-bar-1 block"></span>
                    <span className = "w-12 h-0.5 mt-4 bg-black menu-bar-2 block"></span>
                </button>
                <img src="/assets/programming.png" className = "my-auto ml-auto mr-5 w-20 h-16" alt="" />
            </div>
        </div>          
    );
};

export default Header;

