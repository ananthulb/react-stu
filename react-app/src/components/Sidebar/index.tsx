import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarBtnWrap, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = (props: any) => {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={props.toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={props.toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={props.toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={props.toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin" onClick={props.toggle}>Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
