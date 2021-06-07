import React from 'react';
import MobileNavbar from './MobileNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleOn } from '../../store/actions';

const Header : React.FC = () => {

    const menuToggle = useSelector((state: RootState)=> state.menuToggle.toggle);
    const dispatch = useDispatch();
    const openMenu = () => {
        dispatch(toggleOn());
    }

    return (
        <div>
            { menuToggle && (
                <MobileNavbar />
            )}
            <div className = "">
            <button className = "w-8 h-8 ml-3 mt-3 sm:hidden" onClick = {openMenu} ><img src="/assets/icons/menu-icon.svg" alt=""/></button>
                {/* {
                    menuLink.map((items) => (
                        <a key = {items.name} href = {items.link} className = "text-black">{items.name}</a>
                    ))
                } */}
            </div>
        </div>          
    );
};

export default Header;

