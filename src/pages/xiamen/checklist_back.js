import React, { Component } from 'react';
import Layout from '../../components/layout';
const windowGlobal = typeof window !== 'undefined' && window;

let backList;
const localStorage = windowGlobal.localStorage;

let initData = {
  backListVersion: 1,
  backList: [
    { name: '身份证', finished: false },
    { name: '银行卡', finished: false },
    { name: '充电器', finished: false },
    { name: '充电宝(容量小于等于10000毫安)', finished: false },
    { name: '杯子', finished: false },
    { name: '雨伞', finished: false },
    { name: '毛巾', finished: false },
    { name: '牙刷', finished: false },
    { name: '防晒霜', finished: false },
    { name: '面膜', finished: false },
    { name: '护肤品', finished: false },
    { name: '卸妆水', finished: false },
    { name: '纸巾', finished: false },
    { name: '姨妈巾', finished: false },
    { name: '隐形眼镜', finished: false },
    { name: '太阳镜', finished: false },
    { name: '睡衣', finished: false },
    { name: '内衣', finished: false },
    { name: '长袖', finished: false },
    { name: '长裤', finished: false },
    { name: '短袖', finished: false },
    { name: '中裤or裙子', finished: false },
    { name: '长袜子', finished: false },
    { name: '短袜子', finished: false },
    { name: '帽子', finished: false },
    { name: '拖鞋', finished: false },
    { name: '运动鞋', finished: false },
  ],
};

// try read list from ls
let storedList =
  localStorage && localStorage.getItem && localStorage.getItem('backlist');
let storedVersion =
  localStorage &&
  localStorage.getItem &&
  localStorage.getItem('backlistVersion');
if (
  !storedList ||
  parseInt(storedVersion) !== parseInt(initData.backListVersion)
) {
  backList = initData.backList;
  localStorage &&
    localStorage.setItem &&
    localStorage.setItem('backlist', JSON.stringify(initData));
  localStorage &&
    localStorage.setItem &&
    localStorage.setItem('backlistVersion', initData.backListVersion);
} else {
  backList = JSON.parse(storedList).backList;
}

class NotifyBack extends Component {
  constructor (props) {
    super(props);
    this.state = {
      backList: backList,
    };
  }

  changeHandler = idx => {
    // this.props.tabOnClick && this.props.tabOnClick(evt, value);
    let resultList = [...backList];
    resultList[idx].finished = !resultList[idx].finished;
    this.setState({ backList: resultList });
    localStorage &&
      localStorage.setItem &&
      localStorage.setItem(
        'backlist',
        JSON.stringify({ backList: resultList })
      );
  };

  render () {
    let list = backList.map((li, idx) => {
      return (
        <li
          key={idx}
          onClick={() => this.changeHandler(idx)}
          style={{
            textDecoration: li.finished ? 'line-through' : 'none',
            color: li.finished ? '#ccc' : '#333',
            margin: 0,
            lineHeight: 2.5,
          }}
        >
          <input
            style={{
              marginRight: '12px',
            }}
            type="checkbox"
            checked={li.finished}
            readOnly
          />
          {li.name}
        </li>
      );
    });

    return (
      <Layout
        seo={{
          title: '旅游-厦门',
          description: '旅游-厦门',
          keywords: '旅游 厦门',
        }}
        nav={{ title: '回程清单', back: '/xiamen/' }}
      >
        <div className="content">
          <p
            style={{
              marginBottom: '8px',
            }}
          >
            出行清单的副本，检查一下有无遗漏在客房吧：
          </p>
          <ul
            style={{
              margin: 0,
              listStyle: 'none',
            }}
          >
            {list}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default NotifyBack;
