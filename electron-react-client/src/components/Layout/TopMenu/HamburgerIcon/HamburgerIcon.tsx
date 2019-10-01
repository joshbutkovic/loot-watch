import React, { useState } from 'react';

// interface HamburgerIconProps {
//     onIconClick: (e: any) => void;
// }

const HamburgerIcon: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>();

    // const handleClick = (e: any) => {};
    const currectClass = !isOpen ? 'hamburger-icon' : 'hamburger-menu open';
    return (
        <div className={currectClass} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default HamburgerIcon;
