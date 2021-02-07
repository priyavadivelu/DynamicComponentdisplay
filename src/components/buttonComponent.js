import React, { Component } from 'react'

export default class ButtonComp extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

     increment(count){
         this.setState({count: this.state.count+1})
    }

    decrement(count){
        this.setState({count: this.state.count-1})
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
