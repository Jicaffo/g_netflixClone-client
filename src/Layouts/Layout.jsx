import React from 'react';
import { Header, Footer } from '../Components';

const Layout = ({children}) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout