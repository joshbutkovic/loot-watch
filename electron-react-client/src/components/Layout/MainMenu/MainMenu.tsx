import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface MainMenu {
    isHamburgerOpen: boolean;
}

const MainMenu: React.FC = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
    const handleOnClick = (): void => setIsHamburgerOpen(!isHamburgerOpen);
    const handleLinkClick = (): void => setIsHamburgerOpen(!isHamburgerOpen);

    return (
        <nav
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <NavLink
                    exact
                    to="/"
                    className="navbar-item"
                    activeClassName="is-active"
                    onClick={handleLinkClick}
                >
                    <FontAwesomeIcon icon={faBars} size="1x" />
                </NavLink>
            </div>
            {/* <div className="navbar-start">
                    
                </div> */}
            <div className="navbar-end">
                <NavLink
                    exact
                    to="/login"
                    className="navbar-item"
                    activeClassName="is-active"
                    onClick={handleLinkClick}
                >
                    Login
                </NavLink>
                <NavLink
                    exact
                    to="/register"
                    className="navbar-item"
                    activeClassName="is-active"
                    onClick={handleLinkClick}
                >
                    Register
                </NavLink>
            </div>
        </nav>
    );
};
export default MainMenu;
