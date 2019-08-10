// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasBeenClicked: false,
            currentTheme: 'blue',
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null
              },
         };
         this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            hasBeenClicked: true,
            addressInfo: {
                ...this.state.addressInfo,
                city: 'New York City'
              }
        })

    }
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;

