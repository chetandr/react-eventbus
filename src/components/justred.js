import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
const useStyles = theme => ({
  root: {
    background: 'red',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    margin: 10,
    padding: 10,
  },
  highlight: {
    backgroundColor: "blredue",
    color: "white"
  }
});

class JustRed extends Component {
  shouldComponentUpdate(nextProp, nextState) {
    return this.props.refresh !== nextProp.refresh || this.props.show !== nextProp.show;
  }

  render() {
    const { classes } = this.props;
    return (
    <Grid className={classes.root}>Show Green - {this.props.refresh}</Grid>
    )
  }
}

export default withStyles(useStyles)(JustRed);