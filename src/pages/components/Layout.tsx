import React from 'react';
import GlobalStyles from './../styles/GlobalStyles';
import Footer from './Footer';

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
    <Footer />
  </div>
);

export default Layout;
