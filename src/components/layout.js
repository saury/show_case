import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import Header from './Header';
import './index.css';
import './global.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="厦门游"
      meta={[
        { name: 'description', content: '厦门游' },
        { name: 'keywords', content: '厦门游' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
