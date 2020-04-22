import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  title?: string;
  children: any;
}

const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <Helmet>
      {title ? (
        <title>คิเร็น Kiren - {title}</title>
      ) : (
        <title>คิเร็น Kiren</title>
      )}
      <link
        href="https://fonts.googleapis.com/css?family=Kanit"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <GlobalStyle>
      <Navbar />
      {children}
      <Footer />
    </GlobalStyle>
  </>
);

const GlobalStyle = styled.div`
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", "Kanit", "sans-serif";
`;

export default Layout;
