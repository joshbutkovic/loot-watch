import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../../context/UserContext';

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
        <nav>sidemenu</nav>
        // <aside className={menuClass}>
        //     <p className="menu-label">Budgets</p>
        //     <ul className="menu-list">
        //         <li>
        //             <NavLink
        //                 exact
        //                 to="/"
        //                 className=""
        //                 // activeClassName="is-active"
        //                 onClick={handleLinkClick}
        //             ></NavLink>
        //         </li>
        //         <li>
        //             <NavLink
        //                 exact
        //                 to="/"
        //                 className=""
        //                 // activeClassName="is-active"
        //                 onClick={handleLinkClick}
        //             ></NavLink>
        //         </li>
        //         <li>
        //             <NavLink
        //                 exact
        //                 to="/"
        //                 className=""
        //                 // activeClassName="is-active"
        //                 onClick={handleLinkClick}
        //             ></NavLink>
        //         </li>
        //         <li>
        //             <NavLink
        //                 exact
        //                 to="/"
        //                 className=""
        //                 // activeClassName="is-active"
        //                 onClick={handleLinkClick}
        //             ></NavLink>
        //         </li>
        //     </ul>
        // </aside>
    );
};

export default SideMenu;
