import React from 'react'
import { Header } from '../Components';

const Layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default Layout