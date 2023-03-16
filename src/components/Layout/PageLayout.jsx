import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;

export default function PageLayout() {
     const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
 <Layout className="layout">

      <Navbar></Navbar>

    </Layout>
  )
}
