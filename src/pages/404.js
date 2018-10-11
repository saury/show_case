import React from 'react';
import Layout from '../components/layout';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Icon } from 'antd';

const NotFoundPage = () => (
  <Layout>
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ height: '100%' }}
    >
      <Grid item align="center">
        <div className="error-icon">
          <Icon
            type="warning"
            style={{ fontSize: 60 }}
            theme="twoTone"
            twoToneColor="#f00"
          />
        </div>
        <Typography variant="h3" color="inherit">
          404
        </Typography>
        <Typography variant="body2" color="inherit">
          NOT FOUND
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);

export default NotFoundPage;
