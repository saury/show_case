import React from 'react';
import Layout from '../../components/layout';
import Link from 'gatsby-link';

const IndexPage = () => (
  <Layout
    seo={{
      title: '旅游-厦门',
      description: '旅游-厦门',
      keywords: '旅游 厦门',
    }}
    nav={{ title: '厦门游', back: '/' }}
  >
    <div className="content">
      <ul>
        <li>
          <Link to="/xiamen/checklist/">出行清单</Link>
        </li>
        <li>
          <Link to="/xiamen/flight/">飞行须知</Link>
        </li>
        <li>
          <Link to="/xiamen/eat/">提前知道，有关吃什么</Link>
        </li>
        <li>
          <Link to="/xiamen/day-1/">第1天</Link>
        </li>
        <li>
          <Link to="/xiamen/day-2/">第2天</Link>
        </li>
        <li>
          <Link to="/xiamen/day-3/">第3天</Link>
        </li>
        <li>
          <Link to="/xiamen/day-4/">第4天</Link>
        </li>
        <li>
          <Link to="/xiamen/checklist_back/">回程清单</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
