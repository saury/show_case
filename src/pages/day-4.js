import React from 'react';

import Header from '../components/Header/index';

const img1 = require('../images/qilou.jpg');

const DayFour = () => (
  <div className="container">
    <Header title="第四天" back="/" />
    <div className="content">
      <p>
        最后一天啦，返程的一天。想必昨天玩的很累睡到很晚才醒吧。退房的时候不要遗漏物品。
      </p>
      <p>
        中山路逛逛吃吃买买就要回来了。那里附近好多骑楼，是挺有特色的建筑，逛的时候可以留意下。
      </p>
      <img style={{ marginBottom: '8px', display: 'block' }} src={img1} />
      <small
        style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}
      >
        （骑楼）
      </small>
      <p>
        早点吃过中饭就要赶去火车站了，不要迟到啦，没记错的话还挺远的，打车不划算，可以坐BRT（这种车类似上海的71路，但是全程高架上，没有红绿灯阻碍，还是挺便捷舒适的）到火车站。
      </p>
      <p>火车上就吃吃睡睡玩玩手机看看书吧，到家记得给我消息。</p>
    </div>
  </div>
);

export default DayFour;
