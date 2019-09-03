import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import './SideMenu.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlusCircle,
    faPencilRuler,
    faTrash,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';

// interface SideMenuProps {
//     isMenuOpen: boolean;
// }

const SideMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleLinkClick = (): void => setIsMenuOpen(!isMenuOpen);
    const menuClass = !isMenuOpen ? 'menu' : 'menu--is-open';
    const user = useContext(UserContext);
    console.log(user);
    return (
        <aside className={menuClass}>
            <p className="menu-label">Budgets</p>
            <ul className="menu-list">
                <li>
                    <NavLink
                        exact
                        to="/"
                        className=""
                        // activeClassName="is-active"
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} size="1x" />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/"
                        className=""
                        // activeClassName="is-active"
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon icon={faPencilRuler} size="1x" />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/"
                        className=""
                        // activeClassName="is-active"
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon icon={faTrash} size="1x" />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/"
                        className=""
                        // activeClassName="is-active"
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon icon={faDownload} size="1x" />
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default SideMenu;
