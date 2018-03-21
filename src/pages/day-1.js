import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'

const map = require('../images/map.jpg');
const img1 = require('../images/IMG_1687.jpeg');
const img2 = require('../images/IMG_1688.jpeg');
const img3 = require('../images/timg.jpg');

const DayOne = () => (
    <div className="container">
        <Header title="第一天" back='/' />
        <div className="content">
            <p>上午6点的飞机，不误点的话午饭前就能到高崎机场，机场里可以拿份手绘的厦门地图，尽管用处不是特别大，也权当纪念了。
            </p>
            <p><a href={map} target="_blank">此处有手绘地图电子版</a></p>
            <p>如果立即坐船登岛那就只能在龙头路吃午饭了，否则可以在轮渡旁边的中山路解决午饭问题。</p>
            <p>另外，由于岛上物资稍贵，可以在中山路上的超市买些水之类的补给带到岛上。</p>
            <p>及至到达旅馆下榻，请顺便看看旅馆的紧急逃生门在哪里以防万一。（个人习惯，仅供参考）</p>
            <p>下午可以按体力与兴趣安排一些景点，岛很小，景点无非菽庄花园，日光岩，钢琴博物馆，皓月园。日光岩建议安排在第二天早晨。所以其余三选一。</p>
            <img style={{ marginBottom: '8px', display: 'block' }} src={img1} />
            <small style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}>（钢琴博物馆）</small>
            <img style={{ marginBottom: '8px', display: 'block' }} src={img2} />
            <small style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}>(菽庄花园）</small>
            <img style={{ marginBottom: '8px', display: 'block' }} src={img3} />
            <small style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}>(皓月园)</small>
            <p>岛上地图的设立点不比的街头艺人少，配合手机导航，应该不会迷路。路上看到鲜榨的马拉桑和潘小莲酸奶推荐可以喝喝看。</p>
            <p>鉴于我没有在岛上过夜，对于夜晚的消遣也没什么建议，龙头路吃完晚饭后，估计也就看看隔岸城市夜景不错，最后就是早点休息啦，为后面几天储备能量</p>
            <p>最后提醒下，鼓浪屿晚上不要乱走。。。至于理由，请看下面五则搜刮来的岛上灵异小故事。希望对你胃口，哈哈！</p>
            <ol>
                <li><Link to="/story-1/">八卦楼闹鬼</Link></li>
                <li><Link to="/story-2/">买木屐的女人</Link></li>
                <li><Link to="/story-3/">鼓浪屿教堂的地下室</Link></li>
                <li><Link to="/story-4/">买猪肉的女子</Link></li>
                <li><Link to="/story-5/">殡仪馆旁边的隧道</Link></li>
            </ol>
        </div>
    </div>
)

export default DayOne
