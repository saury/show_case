import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'

let todoList;
const ls = window.localStorage;
const initData = {
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
}

// try read list from ls
var storedList = ls.getItem('todo');
if (!storedList) {
    todoList = initData.todoList;
}
else {
    todoList = JSON.parse(storedList).todoList;
}

const Notify = () => (
    <div>
        <Header title="todo list" link="/" />
        {/* <Header title="出行清单" link="/" /> */}
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default Notify
