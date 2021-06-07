import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useDispatch } from 'react-redux';
import { toggleOff } from '../../store/actions';

const MobileNavbar : React.FC = () => {
    
    const menuLink = [
        {name: "About", link: "#"},
        {name: "Projects", link: "#"},
        {name: "Contact", link: "#"}
    ]
    const dispatch = useDispatch();

    useEffect(() => {
        gsap.from(".mobileNav", {x:-500, duration: 0.5})
    },[])
    
    const closeMenu = () => {
        gsap.to(".mobileNav", {x:-500, duration: 0.5, onComplete: menuToggle})
    }

    const menuToggle = () => {
        dispatch(toggleOff());
    }

    return (
        <div className = "flex flex-col w-screen h-screen bg-gray-700 absolute mobileNav sm:hidden">
            <button className = "text-white mr-auto ml-3 mt-2 text-2xl font-extralight" onClick = {closeMenu}>Close</button>
            <div className = "flex flex-col mx-auto my-auto space-y-10">
                {
                    menuLink.map((items) => (
                        <a key = {items.name} href = {items.link} className = "text-white text-4xl font-extralight">{items.name}</a>
                    ))
                }
            </div>              
        </div>
    );
}

export default MobileNavbar;