import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.scss';

interface SideMenuProps {
    isOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen }) => {
    //TODO Add link click handler to close on link click
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
