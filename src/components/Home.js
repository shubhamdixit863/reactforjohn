import React, { Component } from 'react'
import Nav from './Nav';

class Home extends Component {

constructor(props)
{
    super(props)

    this.props=props;
}


    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.data}</h1>
                <Nav data={this.props.hello}/>
            </div>
        )
    }
}

export default Home;