import React from 'react';
import Link from 'gatsby-link';

import Header from '../../components/Header/index';

// const currentDate = new Date();

// const currentH = currentDate.getHours();
// let welcomeText = '';

// switch (true) {
//   case currentH >= 18:
//     welcomeText = '晚上好~';
//     break;
//   case currentH >= 12:
//     welcomeText = '下午好~';
//     break;
//   case currentH >= 6:
//     welcomeText = '上午好~';
//     break;
//   default:
//     welcomeText = '凌晨好~';
//     break;
// }

const IndexPage = () => (
  <div>
    <Header title="厦门游" back="/" />
    {/* <footer className="footer">
      尽管略显粗糙，但也是每每聊至你睡了，才开始这个项目。
      <small>By Jin</small>
    </footer> */}
    <div className="content">
      {/* <p>{welcomeText}</p> */}
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
  </div>
);

export default IndexPage;
