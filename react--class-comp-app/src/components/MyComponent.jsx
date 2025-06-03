import React, { Component } from 'react'

 class MyComponents extends Component {

    constructor(props){
        super(props)

        this.state = {
            count:0
        }

    }

    render(){

        const bg = {
            backgroundColor : "red",
        };
        return(
            <>
            
            <h1 style={bg}>Class Components</h1>
            <p>My name is {this.props.username}</p>

            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            </>
        )
    }
}

export default MyComponents;