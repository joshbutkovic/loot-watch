import React, { MouseEvent, useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SideMenu from '../SideMenu/SideMenu';
import './MainMenu.scss';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

const MainMenu: React.FC = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

    const handleHamburgerClick = (): void => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const handleOutsideClick = (e: MouseEvent): void => {
        let { classList } = e.target as HTMLElement;
        if (
            !classList.contains('menu') &&
            !classList.contains('menu-title') &&
            !classList.contains('menu-item') &&
            !classList.contains('menu-item-link')
        ) {
            setIsSideMenuOpen(false);
        }
    };

    const handleLinkClick = (): void => {
        setIsSideMenuOpen(false);
    };

    return (
        <>
            <nav>
                <div className="nav-container">
                    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                        <div
                            className="hamburger"
                            onClick={handleHamburgerClick}
                        >
                            {!isSideMenuOpen ? (
                                <FontAwesomeIcon icon={faBars} />
                            ) : (
                                <FontAwesomeIcon icon={faTimes} />
                            )}
                        </div>
                    </OutsideClickHandler>
                </div>
            </nav>
            <SideMenu isOpen={isSideMenuOpen} onLinkClick={handleLinkClick} />
        </>
    );
};

const mapStateToProps = (state: any) => ({
    error: state.error,
});

export default connect(mapStateToProps)(MainMenu);
