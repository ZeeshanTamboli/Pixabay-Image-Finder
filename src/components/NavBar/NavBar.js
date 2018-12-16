import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const NavBar = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="static" style={{ marginBottom: '40px' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            PixaBay Image Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(NavBar);
