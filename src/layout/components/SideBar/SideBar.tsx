import React from 'react';
import mainLogo from '../../../assets/images/main-logo.png';
import { MobileMenuModal, MobileMainMenu, MainLogoLink, SideBarMenu, SideBarItem, SideBarLink } from './SideBarElement';

interface SideBarProps {
  isOpen: any;
  toggle: any;
}

const SideBar = ({ toggle, isOpen = true }: SideBarProps) => {
  return (
    <MobileMenuModal isOpen={isOpen} onClick={toggle}>
      <MobileMainMenu>
        <MainLogoLink to="/">
          <img src={mainLogo} width="263.83" height="63" alt="logo" />
        </MainLogoLink>
        <SideBarMenu>
          <SideBarItem>
            <SideBarLink to="/home2">Home 2</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink to="/about">About</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink to="/service">Service</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink to="/gallery">Gallery</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink to="/team">Team</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink to="/blog">Blog</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink to="/contact">Contact</SideBarLink>
          </SideBarItem>
        </SideBarMenu>
      </MobileMainMenu>
    </MobileMenuModal>
  );
};

export default SideBar;
