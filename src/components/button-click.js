import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { REGISTER_EVENTS, REGISTER_ACTIONS, FIRE_EVENT } from '../redux/actions';

const useStyles = theme => ({
    root: {
        background: 'grey',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        margin: 10,
        padding: 10,
    },
    highlight: {
        backgroundColor: "blue",
        color: "white"
    }
});

class ButtonClick extends Component {

    shouldComponentUpdate(nextProp, nextState) {
        return this.props.classes.root !== nextProp.classes.root;
    }
    componentDidMount() {
        const actions = { ButtonClick: ['Show', 'Hide', 'Popup', 'Refresh'] }
        const events = { ButtonClick: ['singleDataSelect', 'MultiDataSelect', 'ClickAction', 'DoubleClickAction'] };
        this.props.registerActions(actions);
        this.props.registerEvents(events);

    }

    clickAction(action) {
        return () => this.props.fireEvent({ event: action, card: 'ButtonClick' })
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}><Button className={classes.highlight} onClick={this.clickAction('hideAction')}>Hide</Button><Button className={classes.highlight} onClick={this.clickAction('showAction')}>Show</Button></Grid>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    registerEvents: payload => dispatch({ type: REGISTER_EVENTS, payload }),
    registerActions: payload => dispatch({ type: REGISTER_ACTIONS, payload }),
    fireEvent: payload => dispatch({ type: FIRE_EVENT, payload }),
})

export default withStyles(useStyles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonClick))
//export default(ButtonClick);