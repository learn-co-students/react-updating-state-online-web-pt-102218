import React,{ Component, Fragment } from "react";

export default class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () =>
    this.setState({ hasBeenClicked: !this.state.hasBeenClicked });

  render() {
    return (
      <Fragment>
        <div> {this.state.hasBeenClicked ? "true" : "false"}</div>
        <button onClick={this.handleClick} >Click me!</button>
      </Fragment>
    );
  }
}
