import React from 'react';
import { Header, Footer } from '../Components';
import Routes from "../Routes/Routes"

const Layout = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  )
}

export default Layout