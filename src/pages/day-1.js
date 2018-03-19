import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/index'

const DayOne = () => (
    <div>
        <Header title="第一天" link="/" />
        <h1>Hi,</h1>
        <p>Welcome to day 1</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default DayOne
