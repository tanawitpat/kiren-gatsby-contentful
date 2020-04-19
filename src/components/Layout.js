import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const GlobalStyle = styled.div`
  box-sizing: border-box;
  margin: 0;
  font-family: "Poppins", "Kanit", "sans-serif";
`;

const Layout = ({ title, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Kanit"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <GlobalStyle>{children}</GlobalStyle>
  </>
);

export default Layout;
