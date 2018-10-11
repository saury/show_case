import React from 'react';
import Layout from '../components/layout';
import Link from 'gatsby-link';

const IndexPage = () => (
  <Layout
    nav={{
      title: '主页',
    }}
  >
    <div className="content">
      <h3>旅行</h3>
      <ul>
        <li>
          <Link to="/beijing/">
            北京
            <i>new</i>
            <span>2018.10</span>
          </Link>
        </li>
        <li>
          <Link to="/xiamen/">
            厦门
            <span>2018.04</span>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
