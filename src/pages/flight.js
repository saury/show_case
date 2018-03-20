import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'

const FlightPage = () => (
    <div>
        <Header title="飞行须知" back />
        <div className="content">
            <ol style={{
                margin: '0 24px'
            }}>
                <li style={{ margin: '18px 0 32px 0' }}>保险起见提前一个半小时到机场，不要忘了开闹钟。</li>
                <li style={{ margin: '18px 0 32px 0' }}>上飞机前最好先上好厕所。</li>
                <li style={{ margin: '18px 0 32px 0' }}>上飞机不能带刀具、包括水的一切液体。</li>
                <li style={{ margin: '18px 0 32px 0' }}>带个杯子，飞机上干燥，可以问空姐要热水喝。</li>
                <li style={{ margin: '18px 0 32px 0' }}>飞机上冷，记得拿件长袖衣服披着/盖着大腿和膝盖，如果没带可以问空姐要条毯子。</li>
                <li style={{ margin: '18px 0 32px 0' }}>飞机起落时会有点难受，记得频繁咽口水，可以解决耳朵难受的问题。</li>
                <li style={{ margin: '18px 0 32px 0' }}>恐高就不要坐窗口啦！</li>
                <li style={{ margin: '18px 0 32px 0' }}>最后不要紧张，就算出事也一飞机人陪葬呢！😆</li>
            </ol>
        </div>
    </div>
)

export default FlightPage
