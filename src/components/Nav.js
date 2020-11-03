import React, { Component } from 'react'

export default class Nav extends Component {

    constructor(props)
    {
        super(props);
        this.props=props;
    }
    render() {
        return (
            <div>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}
