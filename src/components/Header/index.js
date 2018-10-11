import React from 'react';
import Link from 'gatsby-link';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import Home from '@material-ui/icons/Home';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  leftButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  render () {
    const { classes, title, back } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            {back ? (
              <Link
                to={back}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <IconButton
                  className={classes.leftButton}
                  color="inherit"
                  aria-label="Back"
                >
                  <ArrowBack />
                </IconButton>
              </Link>
            ) : (
              <IconButton
                className={classes.leftButton}
                color="inherit"
                aria-label="Back"
              >
                <Home />
              </IconButton>
            )}
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  back: PropTypes.string,
};

export default withStyles(styles)(MenuAppBar);
