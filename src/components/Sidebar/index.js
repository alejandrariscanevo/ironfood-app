import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';
import {LogOut} from "../../services/regularUser"
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon> 
            <SidebarMenu>
                <SidebarLink to="/find-meal-plan">Find Meal Plans</SidebarLink>
                <SidebarLink to="/entry-recipes">Share Your Recipe</SidebarLink> 
                <SidebarLink to='/view-recipes'>View Recipes</SidebarLink>
                <p></p>
                <SidebarLink onClick={() => {
                    LogOut()
                }}>Log Out</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Log In</SidebarRoute>   
            </SideBtnWrap>         
        </SidebarContainer>
    )
}

export default Sidebar
