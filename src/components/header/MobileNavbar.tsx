import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MobileNavbar : React.FC = () => {
    
    const menuLink = [
        {name: "About", link: "#"},
        {name: "Projects", link: "#"},
        {name: "Contact", link: "#"}
    ]

    const menuMouseHover = () => {
        gsap.to(".nav-link-1", {color: "blue"})
    }

    useEffect(() => {
        gsap.timeline()
        .from(".mobile-nav", {opacity:0, x:"-100%", duration: 0.5, autoAlpha:0})
        .from(".nav-link", {opacity:0, x:"-100%", stagger: 0.1, duration: 0.3},"<")
    },[])

    return ( 
        <div className = "flex flex-col bg-gray-200 absolute z-40 w-screen h-screen mobile-nav invisible overflow-hidden">
            <div className = "flex flex-col ml-20 my-auto space-y-10 max-w-min">
                {               
                    menuLink.map((items, i) => (
                        <a key = {items.name} href = {items.link} onMouseEnter = {menuMouseHover} className = {"nav-link text-black text-4xl font-light nav-link-"+ (i+1)}>{items.name}</a>
                    ))
                }
            </div>              
        </div>
    );
}

export default MobileNavbar;