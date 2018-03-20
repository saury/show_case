import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'

const startDay = 1 // set start up date for showing the actived style of the sheet
  , currentDate = new Date()
  ;

// todo: judge date
console.warn(currentDate.getDay());

const IndexPage = () => (
  <div>
    <Header title="厦门游" />
    <footer className="footer">
      尽管略显粗糙，但也是每每聊至你睡了，才开始这个项目。<br />望对你有所帮助，午夜迎风，想你……
    </footer>
    <div className="content">
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
          <Link
            // to="/day-2/"
            to="/"
            style={{ color: "#ccc" }}>第2天</Link>
        </li>
        <li>
          <Link
            // to="/day-3/"
            to="/"
            style={{ color: "#ccc" }}
          >第3天</Link>
        </li>
        <li>
          <Link
            // to="/day-4/"
            to="/"
            style={{ color: "#ccc" }}
          >第4天</Link>
        </li>
      </ul>
    </div>

  </div >
)

export default IndexPage
