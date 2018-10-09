import React from 'react';
import Link from 'gatsby-link';

const Header = props => (
  <div
    className="header"
    style={{
      background: 'rebeccapurple',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        color: 'white',
        textDecoration: 'none',
        // padding: '1.45rem 1.0875rem',
        height: '60px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {props.back && (
        <small
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            lineHeight: '60px',
            paddingLeft: '24px',
          }}
        >
          <Link
            to={props.back}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            BACK
          </Link>
        </small>
      )}
      <h3
        style={{
          margin: 0,
          lineHeight: '60px',
        }}
      >
        {props.title}
      </h3>
    </div>
  </div>
);

export default Header;
