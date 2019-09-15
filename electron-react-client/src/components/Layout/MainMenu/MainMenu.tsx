import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { colors } from '../../../theme';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
import './MainMenu.scss';

interface MainMenu {
    isHamburgerOpen: boolean;
}

const MainMenu: React.FC = () => {
    const [current, setCurrent] = useState<string>('menu');
    // const handleOnClick = (): void => setIsHamburgerOpen(!isHamburgerOpen);
    // const handleLinkClick = (): void => setIsHamburgerOpen(!isHamburgerOpen);
    const handleClick = (e: any) => {
        setCurrent(e.key);
        console.log('handleclick called');
    };

    return (
        <Menu
            theme="dark"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
        >
            <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                        Navigation Three - Submenu
                    </span>
                }
            >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="mail">
                <Icon type="mail" />
                Navigation One
            </Menu.Item>
        </Menu>
    );
};
export default MainMenu;
