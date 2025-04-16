import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaSignOutAlt, FaUserMd, FaHeadset, FaKeyboard, FaTimes, FaBars, FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';

// Styled components for AdminHome
const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  background-color: #f8f9fa;
`;

const SidebarToggle = styled.button`
  display: none;
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1100;
  background-color: #2d3748;
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #2d3748;
  color: white;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};

  @media (min-width: 769px) {
    transform: translateX(0);
    position: relative;
    height: 100%;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1a202c;
`;

const SidebarTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarMenu = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4a5568;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    padding: 0.5rem;
  }
`;

const MenuIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.2rem;
`;

const MenuText = styled.span`
  font-size: 1rem;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;
  background-color: #f7fafc;

  @media (min-width: 769px) {
    margin-left: 250px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 3rem;
  }
`;

const AdminHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('user');
      window.alert('Successful logout');
      setIsSidebarOpen(false);
      window.location.href = '/';
    }
  };

  const menuItems = [
    { name: 'Back', icon: <FaArrowLeft />, path: '/' },
    { name: 'Logout', icon: <FaSignOutAlt />, action: logout },
    { name: 'Doctor', icon: <FaUserMd />, path: '/admin/doctor' },
    { name: 'Front Desk', icon: <FaHeadset />, path: '/admin/front-desk' },
    { name: 'Data Entry', icon: <FaKeyboard />, path: '/admin/data-entry' },
  ];

  return (
    <MainContainer>
      <SidebarToggle onClick={toggleSidebar}>
        <FaBars />
      </SidebarToggle>

      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <SidebarTitle>Admin Panel</SidebarTitle>
          <CloseButton onClick={toggleSidebar}>
            <FaTimes />
          </CloseButton>
        </SidebarHeader>
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              to={item.path || '#'}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
                toggleSidebar();
              }}
            >
              <MenuIcon>{item.icon}</MenuIcon>
              <MenuText>{item.name}</MenuText>
            </MenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>

      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
};

export default AdminHome;