import React, { Component } from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'
const windowGlobal = typeof window !== 'undefined' && window;

let todoList;
const localStorage = windowGlobal.localStorage;

let initData = {
    "todoList": [
        { "name": "身份证", "finished": false },
        { "name": "银行卡", "finished": false },
        { "name": "充电器", "finished": false },
        { "name": "充电宝(容量小于等于10000毫安)", "finished": false },
        { "name": "杯子", "finished": false },
        { "name": "雨伞", "finished": false },
        { "name": "毛巾", "finished": false },
        { "name": "牙刷", "finished": false },
        { "name": "防晒霜", "finished": false },
        { "name": "面膜", "finished": false },
        { "name": "护肤品", "finished": false },
        { "name": "卸妆水", "finished": false },
        { "name": "纸巾", "finished": false },
        { "name": "姨妈巾", "finished": false },
        { "name": "隐形眼镜", "finished": false },
        { "name": "太阳镜", "finished": false },
        { "name": "睡衣", "finished": false },
        { "name": "内衣", "finished": false },
        { "name": "长袖", "finished": false },
        { "name": "长裤", "finished": false },
        { "name": "短袖", "finished": false },
        { "name": "中裤or裙子", "finished": false },
        { "name": "长袜子", "finished": false },
        { "name": "短袜子", "finished": false },
        { "name": "帽子", "finished": false },
        { "name": "拖鞋", "finished": false },
        { "name": "运动鞋", "finished": false },
    ]
};

// try read list from ls
var storedList = localStorage && localStorage.getItem && localStorage.getItem('todo');
if (!storedList) {
    todoList = initData.todoList;
    localStorage && localStorage.setItem && localStorage.setItem('todo', JSON.stringify(initData));
}
else {
    todoList = JSON.parse(storedList).todoList;
}

class Notify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: todoList
        };
    }

    changeHandler = (idx) => {
        // this.props.tabOnClick && this.props.tabOnClick(evt, value);
        let resultList = [...todoList];
        resultList[idx].finished = !resultList[idx].finished;
        this.setState({ todoList: resultList });
        localStorage && localStorage.setItem && localStorage.setItem('todo', JSON.stringify({ todoList: resultList }));
    }

    render() {

        let list = todoList.map((li, idx) => {
            return (
                <li
                    key={idx}
                    onClick={() => this.changeHandler(idx)}
                    style={{
                        textDecoration: li.finished ? 'line-through' : 'none',
                        color: li.finished ? '#ccc' : '#333',
                        margin: 0,
                        lineHeight: 2.5
                    }}
                >
                    <input
                        style={{
                            marginRight: '12px'
                        }}
                        type="checkbox"
                        checked={li.finished} readOnly />
                    {li.name}
                </li>
            );
        });

        return (
            <div className="container">
                <Header title="出行清单" back='/' />
                <div className="content">
                    <p style={{
                        marginBottom: '8px'
                    }}>列出了依我所见比较重要的项目，可以借此排查下有无遗漏物件：</p>
                    <ul
                        style={{
                            margin: 0,
                            listStyle: 'none',
                        }}>
                        {list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Notify
