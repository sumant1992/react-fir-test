import React from "react";
import "./style.css";

export default class App1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.name}.</h2>
      </div>
    );
  }
}
