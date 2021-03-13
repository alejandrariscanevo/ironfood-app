import React from 'react';
import { Nav, NavIcon, NavLink, Bars } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <div style={{width:"100%", position: 'absolute'}}>
            <Nav>
                <NavLink to='/'>Iron Food</NavLink>
                <NavIcon onClick={toggle}>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    );
};

export default Navbar;
