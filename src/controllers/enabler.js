// Call the render with the components
// Methods to update the component state for show and hide
// Event Register
// Action Register
import React, { Component } from 'react'
import Renderer from './renderer';
import { connect } from 'react-redux';
import {isEmpty, isEqual, find } from 'lodash';
import {FIRE_EVENT} from '../redux/actions';


const triggers = {
    'ButtonClick': {
        'showAction': [{
            card: 'HelloWorld',
            action: 'show'
        },{
            card: 'JustGreen',
            action: 'show'
        }, {
            card: 'JustBlue',
            action: 'hide'
        }],
        'hideAction': [{
            card: 'HelloWorld',
            action: 'hide'
        }, {
            card: 'JustGreen',
            action: 'refresh'
        },{
            card: 'JustBlue',
            action: 'show'
        }],
    }
}
class Enabler extends Component {
    constructor(props) {
        super(props);
        this.state = { componentList: this.props.componentList };
    }

    render() {
        return <Renderer componentList={this.state.componentList}></Renderer>
    }
    componentDidUpdate() {
        this.props.clearFilter();
    }
}

const mapStateToProps = (state, ownProps) => {
    let newState = {}
    if(!isEmpty(state.firedEvents)) {
        newState = Object.assign({}, state && state.firedEvents ? { firedEvents: state.firedEvents } : {});
        if (!isEqual(state.firedEvents, ownProps.firedEvents)) {
            const newComponentList = processEvents(state.firedEvents, ownProps.componentList);
            if (!isEqual(newComponentList, ownProps.componentList))
                newState = Object.assign({}, state && state.firedEvents ? { firedEvents: state.firedEvents } : {});
    
        }
    }
   
    return newState;
}

const mapDispatchToProps = dispatch => ({
    clearFilter : () => dispatch({ type: FIRE_EVENT, payload: {} })
})

const processEvents = (firedEvents, componentsToProcess) => {

    const eventSource = firedEvents.card;
    const eventTriggered = firedEvents.event;
    const subscribers = triggers[eventSource][eventTriggered];
    subscribers.forEach(subscriber => {
        const targetCard = find(componentsToProcess, component => component.type === subscriber.card);
        cardActions()[subscriber.action](targetCard)
    });
    return componentsToProcess;
}

const cardActions = () => ({
    show: object => {
        object.show = true;
    },
    hide: object => {
        object.show = false;
    },
    refresh: object => {
        object.refresh = Math.random();
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Enabler)