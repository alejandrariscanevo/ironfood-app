import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon> 
            <SidebarMenu>
                <SidebarLink to="/">Bowls</SidebarLink>
                <SidebarLink to="/">Healthy Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink> 
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>         
        </SidebarContainer>
    )
}

export default Sidebar
