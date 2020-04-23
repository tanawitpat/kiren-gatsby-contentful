import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GlobalStyle } from "../theme/global-style";
import { ThemeProvider } from "styled-components";

interface Props {
  title?: string;
  children: any;
}

const theme = {
  colors: {
    red: "red",
  },
};

const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <Helmet>
      <html lang="th" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Kiren BBQ. Thai BBQ stove manufacturer"
      />
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
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  </>
);

export default Layout;
