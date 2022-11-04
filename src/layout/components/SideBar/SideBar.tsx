import React from 'react';
import mainLogo from '../../../assets/images/main-logo.png';
import {
  MobileMenuModal,
  MobileMainMenu,
  MainLogoLink,
  SideBarMenu,
  SideBarItem,
  SideBarLink,
  SideBarLinkActive,
} from './SideBarElement';

interface SideBarProps {
  isOpen: any;
  toggle: any;
}

const SideBar = ({ toggle, isOpen = true }: SideBarProps) => {
  return (
    <MobileMenuModal isOpen={isOpen} onClick={toggle}>
      <MobileMainMenu>
        <MainLogoLink href="/">
          <img src={mainLogo} width="263.83" height="63" alt="logo" />
        </MainLogoLink>
        <SideBarMenu>
          <SideBarItem>
            <SideBarLinkActive href="/">Home +</SideBarLinkActive>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink href="">About</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink href="">Service</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink href="">Gallery</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink href="">Blog</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink href="">Contact</SideBarLink>
          </SideBarItem>
        </SideBarMenu>
      </MobileMainMenu>
    </MobileMenuModal>
  );
};

export default SideBar;
