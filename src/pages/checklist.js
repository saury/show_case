import React, { Component } from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'

let todoList;
const ls = window.localStorage;
let initData = {
    "todoList": [{ "name": "咽口水", "finished": false },
    { "name": "杯子", "finished": false },
    { "name": "毛毯", "finished": false },
    { "name": "身份证", "finished": false },
    { "name": "银行卡", "finished": false },
    { "name": "充电器", "finished": false },
    { "name": "充电宝", "finished": false },
    { "name": "雨伞", "finished": false },
    { "name": "毛巾", "finished": false },
    { "name": "牙刷", "finished": false },
    { "name": "纸巾", "finished": false },
    { "name": "姨妈巾", "finished": false },
    { "name": "太阳镜", "finished": false },
    { "name": "帽子", "finished": false },
    { "name": "长袖", "finished": false },
    { "name": "长裤", "finished": false },
    { "name": "短袖", "finished": false },
    { "name": "中裤or裙子", "finished": false },
    { "name": "拖鞋", "finished": false },
    { "name": "运动鞋", "finished": false }]
};

// todo: remove these debug info
initData = {
    "todoList": [
        { "name": "1", "finished": false },
        { "name": "2", "finished": false },
        { "name": "3", "finished": false },
        { "name": "4", "finished": false }
    ]
}

// try read list from ls
var storedList = ls.getItem('todo');
if (!storedList) {
    todoList = initData.todoList;
    ls.setItem('todo', JSON.stringify(initData));
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
        ls.setItem('todo', JSON.stringify({ todoList: resultList }));
    }

    render() {

        let list = todoList.map((li, idx) => {
            return (
                <li
                    key={idx}
                    onClick={() => this.changeHandler(idx)}
                    style={{
                        textDecoration: li.finished ? 'line-through' : 'none'
                    }}
                >
                    {li.name}
                </li>
            );
        });

        return (
            <div>
                <Header title="todo list" link="/" />
                {/* <Header title="出行清单" link="/" /> */}
                <ul style={{
                    listStyle: 'none'
                }}>
                    {list}
                </ul>
                <Link to="/">Go back to the homepage</Link>
            </div>
        );
    }
}

export default Notify
