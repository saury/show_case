import React from 'react';
import Layout from '../../components/layout';

const Story3 = () => (
  <Layout
    seo={{
      title: '旅游-厦门',
      description: '旅游-厦门',
      keywords: '旅游 厦门',
    }}
    nav={{ title: '鼓浪屿教堂的地下室', back: '/day-1/' }}
  >
    <div className="content">
      <p>
        在旧时代鼓浪屿内厝这个地方是墓地，经常有人一到晚上会看到那里很热闹，很多人出来买东西。在鼓浪屿的天主教教堂的地下室里发现了一地的小孩白骨，这些小孩都是去那里玩就在也没有回来了。
      </p>
    </div>
  </Layout>
);

export default Story3;
