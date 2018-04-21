import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header/index';

const startDay = 1, // set start up date for showing the actived style of the sheet
    currentDate = new Date(),
    weather = [
        { info: '今天厦门天气晴好，温度12-19°C，空气质量良好', sun: '今夜日落时间18:18，明日日出时间6:08' },
        { info: '今天厦门天气晴好，温度14-22°C，空气质量良好', sun: '今夜日落时间18:18，明日日出时间6:07' },
        { info: '今天厦门天气晴好，温度15-24°C，空气质量良好', sun: '今夜日落时间18:18，明日日出时间6:07' },
        {
            info: '今天厦门天气晴好，温度16-23°C，空气质量良好',
            sun: '上海天气可能有雨，温度11-19°C，回来记得备伞，记得穿厚实点~',
        },
    ];

// todo: judge date

const weatherIdx = currentDate.getDay() - 4; // start from Thursday
const currentH = currentDate.getHours();
let welcomeText = '';

switch (true) {
    case currentH >= 18:
        welcomeText = '晚上好~';
        break;
    case currentH >= 12:
        welcomeText = '下午好~';
        break;
    case currentH >= 6:
        welcomeText = '上午好~';
        break;
    default:
        welcomeText = '凌晨好~';
        break;
}

const IndexPage = () => (
    <div>
        <Header title="厦门游" />
        <footer className="footer">
            尽管略显粗糙，但也是每每聊至你睡了，才开始这个项目。
            <small>By Jin</small>
            {/* <br />望对你有所帮助，午夜迎风，想你…… */}
        </footer>
        <div className="content">
            {/* <p>姣，{welcomeText}</p> */}
            {/* weather info */}
            {/* {weather[weatherIdx] && <p>
        {weather[weatherIdx].info}
        <br />
        <span style={{ color: '#666' }}>
          {weather[weatherIdx].sun}
        </span>
      </p>} */}
            {/* <p><strong>注意保暖！注意保暖！注意保暖！重要的事说三遍</strong></p> */}
            <ul>
                <li>
                    <Link to="/checklist/">出行清单</Link>
                </li>
                <li>
                    <Link to="/flight/">飞行须知</Link>
                </li>
                <li>
                    <Link to="/eat/">提前知道，有关吃什么</Link>
                </li>
                <li>
                    <Link to="/day-1/">第1天</Link>
                </li>
                <li>
                    <Link to="/day-2/">第2天</Link>
                </li>
                <li>
                    <Link to="/day-3/">第3天</Link>
                </li>
                <li>
                    <Link to="/day-4/">第4天</Link>
                </li>
                <li>
                    <Link to="/checklist_back/">回程清单</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default IndexPage;
