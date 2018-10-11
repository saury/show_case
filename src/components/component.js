// import 'antd/dist/antd.css';

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header/index';
import { Layout as AntLayout, BackTop } from 'antd';

const { Content } = AntLayout;

const navClassed = {
  root: 'top-nav',
};

const Layout = ({
  className,
  children,
  seo = {
    title: "Jin's Github Page",
    description: `Build with Blazing fast modern site generator for React —— Gatsby`,
    keywords: 'jin github page gatsby life',
  },
  nav,
}) => (
  <AntLayout className={className}>
    {seo && (
      <Helmet
        title={seo.title}
        meta={[
          { name: 'description', content: seo.description },
          { name: 'keywords', content: seo.keywords },
        ]}
      />
    )}
    {nav && <Header classes={navClassed} title={nav.title} back={nav.back} />}
    <Content className="main" id="main">
      <BackTop target={() => document.getElementById('main')} />
      {children}
    </Content>
  </AntLayout>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
