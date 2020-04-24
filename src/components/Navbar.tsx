import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default () => (
  <StyledNavbar>
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">Kiren BBQ</Link>
      </div>
      <div className="navbar__right">
        <Link to="/">หน้าแรก</Link>
        <Link to="/products">สินค้า</Link>
        <Link to="/how-to-order">วิธีการสั่งซื้อ</Link>
        <Link to="/contact">ติดต่อเรา</Link>
      </div>
    </div>
  </StyledNavbar>
);

const StyledNavbar = styled.div`
  background-color: #f8f9fa;
  padding: 0;
  margin: 0;

  .navbar {
    list-style-type: none;
    margin: auto;
    padding: 15px 40px;
    overflow: hidden;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;

    a {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.black};
      text-align: center;
      text-decoration: none;
      cursor: pointer;
    }

    &__right {
      > * {
        &:not(:last-child) {
          margin-right: 50px;
        }
      }
    }
  }
`;
