import React, { MouseEvent, useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import HamburgerIcon from './HamburgerIcon/HamburgerIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import SideMenu from '../SideMenu/SideMenu';
// import { colors } from '../../../theme';
import './MainMenu.scss';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

const MainMenu: React.FC = () => {
    // const [sideMenuDom, setSideMenuOpenDom] = useState<
    //     React.RefObject<HTMLDivElement> | undefined
    // >(undefined);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        // const node = React.createRef<HTMLDivElement>();
        // setSideMenuOpenDom(node);
    }, []);

    const handleHamburgerClick = (): void => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const handleOutsideClick = (e: MouseEvent): void => {
        let target = e.target as HTMLElement;
        if (
            !target.classList.contains('menu') ||
            !target.classList.contains('nav-container')
        ) {
            setIsSideMenuOpen(false);
        }
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
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </OutsideClickHandler>
                </div>
            </nav>
            <SideMenu isOpen={isSideMenuOpen} />
        </>
    );
};

const mapStateToProps = (state: any) => ({
    error: state.error,
});

export default connect(mapStateToProps)(MainMenu);
