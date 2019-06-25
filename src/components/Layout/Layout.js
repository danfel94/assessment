import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <div className="line--colored" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
