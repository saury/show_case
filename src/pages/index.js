import React from 'react';
import Layout from '../components/layout';
import Link from 'gatsby-link';

import { List, Tag } from 'antd';

const data = [
  {
    url: '/moganshan',
    where: '莫干山',
    when: '2019.05',
  },
  {
    url: '/beijing',
    where: '北京',
    when: '2018.10',
  },
  {
    url: '/xiamen',
    where: '厦门',
    when: '2019.04',
  },
];

const IndexPage = () => (
  <Layout
    nav={{
      title: '足迹',
    }}
  >
    <div className="content">
      <List
        size="large"
        dataSource={data}
        renderItem={(item, idx) => (
          <List.Item>
            <Link to={item.url}>
              <span style={{ minWidth: 60, display: 'inline-block' }}>
                {item.where}
              </span>
              <span>{item.when}</span>
              {idx === 0 && (
                <Tag color="magenta" style={{ marginLeft: 12 }}>
                  new
                </Tag>
              )}
            </Link>
          </List.Item>
        )}
      />
    </div>
  </Layout>
);

export default IndexPage;
