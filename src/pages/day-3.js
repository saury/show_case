import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'

const img1 = require('../images/day3/1.jpg');
const img2 = require('../images/day3/2.jpg');
const img3 = require('../images/day3/3.jpg');
const img4 = require('../images/day3/4.jpg');

const DayThree = () => (
    <div className="container">
        <Header title="第三天" back='/' />
        <div className="content">
            <p>『白城沙滩——厦门大学——沙坡尾——猫街——钟鼓索道——环岛路』这是你们的行程安排，我看了下，总体安排的还是不错的，我就不画蛇添足另提想法啦。</p>
            <img style={{ marginBottom: '8px', display: 'block' }} src={img1} />
            <small style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}>（路线，总共大致步行5公里）</small>
            <p>当然，还是需要提及一些要点的：</p>
            <h4>白城沙滩</h4>
            <ol>
                <li>切莫下水，切莫下水，切莫下水。</li>
            </ol>
            <h4>有关厦大</h4>
            <ol>
                <li>厦门大学貌似是要押身份证的，以防万一还是不要忘记带。</li>
                <li>厦大芙蓉隧道拉风的涂鸦墙不要错过，充满了青春的味道，亮点是消防龙头，自行寻找体会……</li>
                <li>厦大芙蓉餐厅建议品尝下，没记错的话只有3楼可以用现金。不管味道怎么样，但多少会让人回想到读大学时学校食堂的味道。</li>
                <li>校内或者附近的书店里可以买本喜欢的书（如果这次出门没带书的话），至于原因呢，回程8小时动车呢，没书看你说多无聊？</li>
            </ol>
            <img style={{ marginBottom: '8px', display: 'block' }} src={img2} />
            <small style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}>（涂鸦墙）</small>
            <h4>有关猫街</h4>
            <ol>
                <li>这是一条以猫咪为主题的小街，街心有一家猫咪博物馆。</li>
                <li>喜欢猫咪的你可以凹造型自拍啦！（然后我就又有照片看啦👏）</li>
            </ol>
            <img style={{ marginBottom: '8px', display: 'block' }} src={img3} />
            <small style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}>（猫街）</small>
            <h4>钟鼓索道</h4>
            <ol>
                <li>貌似是老式无玻璃的那种……不知道你有没有胆坐。</li>
                <li>还是鼓起勇气坐下吧，听说风景真的不错，我还有点遗憾没有坐过呢。</li>
            </ol>
            <img style={{ marginBottom: '8px', display: 'block' }} src={img4} />
            <small style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}>（钟鼓索道）</small>
            <p>
                除此之外，厦大旁边的南普陀不错，有赠香，可以拜一拜祈福，至于山，想必你也爬不动，那里的素斋不错，不知道你们索道坐单程还是往返，如果单程，终点就在南普陀，或许可以考虑晚饭吃素斋清清肠。
            </p>
        </div>
    </div>
)

export default DayThree
