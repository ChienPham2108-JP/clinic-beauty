import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileMenuModal = styled.div<{ isOpen?: boolean }>`
  z-index: 11;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  left: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-60%')};
`;

export const MobileMainMenu = styled.nav<{ isOpen?: boolean }>`
  width: 60%;
  position: absolute;
  bottom: 0;
  top: 0;
  left: -60%;
  left: ${({ isOpen }) => (isOpen ? '-60%' : '0')};
  background-color: #fff;
  padding: 16px 0 0 32px;
  transition: left 0.5s ease-in;
  @media (max-width: 576px) {
    width: 80%;
    padding: 16px 0 0 0;
  }
`;

export const MainLogoLink = styled(Link)`
  max-width: 200px;
  padding: 20px 0 20px 20px;
  width: 100%;
  transform: background-color 250s linear;
  &:hover {
    opacity: 0.65;
  }
  & img {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: auto;
  }
`;

export const SideBarMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
`;

export const SideBarItem = styled.li`
  &:first-child {
    display: flex;
  }
  width: 100%;
`;

export const SideBarLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 0.1em;
  color: var(--desc-text-color);
  &:hover {
    color: var(--text-color);
  }
  padding: 20px 0 20px 20px;
  width: 100%;
  transform: background-color 250s linear;
`;
export const SideBarLinkActive = styled.a`
  text-decoration: none;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: #414880;
  padding: 20px 0 20px 20px;
  width: 100%;
  transform: background-color 250s linear;
`;
