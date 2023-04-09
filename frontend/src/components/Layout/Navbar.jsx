import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navlinks from './Navlinks';
import PageLayout from './PageLayout';

const { Header, Content, Footer } = Layout;

export default function Navbar() {
  return (
         <Header>
         <Navlinks to="/homepage" name="Library"> </Navlinks>
      <Navlinks to="/books" name="Books"> </Navlinks>
      <Navlinks to="/addBooks" name="Add Books"> </Navlinks>
      <Navlinks to="/login" name="Log In"> </Navlinks>
      <Navlinks to="/signup" name="Sign Up"> </Navlinks>
        
      
      </Header>
  )
}
