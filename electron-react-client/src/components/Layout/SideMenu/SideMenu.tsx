import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.scss';

interface SideMenuProps {
    // toggleIsOpen(): void;
    ref: React.RefObject<HTMLDivElement> | undefined;
    isOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen }) => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    // const handleLinkClick = (): void => setIsMenuOpen(!isMenuOpen);
    // const menuClass = !isMenuOpen ? 'menu' : 'menu--is-open';
    // const menuStyles = {

    // };
    return (
        <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
            <li>
                <a href="#">Edit</a>
            </li>
            <li>
                <a href="#">Delete</a>
            </li>
            <li>
                <a href="#">Archive</a>
            </li>
        </ul>
    );
};

export default SideMenu;
