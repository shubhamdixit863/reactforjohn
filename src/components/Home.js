import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default Home;