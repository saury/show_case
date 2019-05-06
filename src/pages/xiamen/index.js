import React from 'react';
import Layout from '../../components/layout';
import Link from 'gatsby-link';

import { List } from 'antd';

const data = [
  {
    url: '/xiamen/checklist',
    title: '出行清单',
  },
  {
    url: '/xiamen/flight',
    title: '飞行须知',
  },
  {
    url: '/xiamen/eat',
    title: '提前知道，有关吃什么',
  },
  {
    url: '/xiamen/day-1',
    title: '第1天',
  },
  {
    url: '/xiamen/day-2',
    title: '第2天',
  },
  {
    url: '/xiamen/day-3',
    title: '第3天',
  },
  {
    url: '/xiamen/day-4',
    title: '第4天',
  },
  {
    url: '/xiamen/checklist_back',
    title: '回程清单',
  },
];

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
      <List
        size="large"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Link to={item.url}>{item.title}</Link>
          </List.Item>
        )}
      />
    </div>
  </Layout>
);

export default IndexPage;
