// render the components

import React, { Component } from 'react'
import { getComponent } from './componentFactory';
import {Grid} from '@material-ui/core'
export default class Renderer extends Component {

    render() {
        return (<div>
            <Grid container>
            {this.props.componentList.map(component => {
                return getComponent(component.type,{...component.props, show: component.show, refresh: component.refresh}, component.show);
            })}
            </Grid>
        </div>)
    }
}