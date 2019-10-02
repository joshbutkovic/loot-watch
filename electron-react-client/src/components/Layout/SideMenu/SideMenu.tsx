import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.scss';

interface SideMenuProps {
    isOpen: boolean;
    onLinkClick(): void;
}

interface Links {
    to: string;
    name: string;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onLinkClick }) => {
    const links: Links[] = [
        { to: '/dashboard', name: 'Dashboard' },
        { to: '/create', name: 'Create' },
        { to: '/edit', name: 'Edit' },
        { to: '/delete', name: 'Delete' },
    ];

    const listItems: JSX.Element[] = links.map(
        (item, index): JSX.Element => {
            return (
                <li className="menu-item" key={index}>
                    <NavLink
                        to={item.to}
                        onClick={onLinkClick}
                        activeClassName="is-active"
                    >
                        {item.name}
                    </NavLink>
                </li>
            );
        },
    );

    return (
        <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
            <li className="menu-item">
                <h5 className="menu-title">Budgets</h5>
            </li>
            {listItems}
        </ul>
    );
};

export default SideMenu;
