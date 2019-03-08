import React, { Component } from "react";
import "./style.css";


class NavBar extends Component {
  render() {
    return (
    // <div className="barre">
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="title">Harry Potter Clicky Game</li>
          <li className="message">{this.props.message}</li>
          <li className="scores">Score: {this.props.score} | Top Score: {this.props.topscore} </li>
        </ul>
      </nav>
    //   </div>
    );
  }
}

export default NavBar;