import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';
import './global.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="厦门游"
            meta={[{ name: 'description', content: '厦门游' }, { name: 'keywords', content: '厦门游' }]}
        />
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                paddingTop: 0,
            }}
        >
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
