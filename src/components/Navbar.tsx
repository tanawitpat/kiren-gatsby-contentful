import React from "react";
import styled from "styled-components";
import { useIntl, Link, changeLocale } from "gatsby-plugin-intl";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const intl = useIntl();

  return (
    <StyledNavbar>
      <div className="navbar">
        <div className="navbar__left">
          <Link to="/">Kiren BBQ</Link>
        </div>
        <div className="navbar__right">
          <Link to="/">{intl.formatMessage({ id: "header.homepage" })}</Link>
          <Link to="/products">
            {intl.formatMessage({ id: "header.products" })}
          </Link>
          <Link to="/how-to-order">
            {intl.formatMessage({ id: "header.howToOrder" })}
          </Link>
          <Link to="/contact">
            {intl.formatMessage({ id: "header.contact" })}
          </Link>
          <p>
            <span onClick={() => changeLocale("th")}>TH</span> |{" "}
            <span onClick={() => changeLocale("en")}>EN</span>
          </p>
        </div>
      </div>
    </StyledNavbar>
  );
};

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

    * {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.black};
      text-align: center;
      text-decoration: none;
      margin: 0;
    }

    a {
      cursor: pointer;
    }

    span {
      cursor: pointer;
    }

    &__right {
      display: flex;

      > * {
        &:not(:last-child) {
          margin-right: 50px;
        }
      }
    }
  }
`;

export default Navbar;
