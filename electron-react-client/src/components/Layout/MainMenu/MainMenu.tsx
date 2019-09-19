import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon/HamburgerIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { colors } from '../../../theme';
import { Input, Menu, Icon } from 'semantic-ui-react';

import './MainMenu.scss';

interface MainMenu {
    isHamburgerOpen: boolean;
}

const MainMenu: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('home');
    // const handleOnClick = (): void => setIsHamburgerOpen(!isHamburgerOpen);
    // const handleLinkClick = (): void => setIsHamburgerOpen(!isHamburgerOpen);
    const handleClick = (e: any) => {
        setActiveItem(e.key);
        console.log('handleclick called');
    };

    return (
        <Menu secondary>
            <Menu.Item
                name="hamburger"
                active={activeItem === 'hamburger'}
                onClick={handleClick}
            >
                <Icon name="grid layout" />
            </Menu.Item>
            <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={handleClick}
            />
            <Menu.Item
                name="messages"
                active={activeItem === 'messages'}
                onClick={handleClick}
            />
            <Menu.Item
                name="friends"
                active={activeItem === 'friends'}
                onClick={handleClick}
            />
            <Menu.Menu position="right">
                <Menu.Item
                    name="logout"
                    active={activeItem === 'logout'}
                    onClick={handleClick}
                />
            </Menu.Menu>
        </Menu>
    );
};
export default MainMenu;
