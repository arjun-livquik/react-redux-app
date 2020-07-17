import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
`;
const SideNavWarpper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: calc(100vh - 92px); // padding + header height deducted
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ItemLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  background-color: skyblue;
  text-decoration: none;
  align-items: center;
  border-bottom: 1px solid;
`;

const CompanyLogo = styled.img`
  width: ${({ theme }) => theme.spacing(10)};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/admin/dashboard">
        <CompanyLogo src="/logo192.png" alt="company logo" />
      </Link>
      <Link to="/login"> Logout</Link>
    </HeaderWrapper>
  );
};

const SideNav = () => {
  return (
    <SideNavWarpper>
      <ItemLink to="/admin/dashboard">Dashboard</ItemLink>
      <ItemLink to="/admin/profile">Profile</ItemLink>
      <ItemLink to="/login">Logout</ItemLink>
    </SideNavWarpper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const AdminContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <Wrapper>
        <SideNav />
        <Container>{children}</Container>
      </Wrapper>
    </div>
  );
};

export default AdminContainer;
