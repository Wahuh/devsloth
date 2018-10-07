import React, { Component } from "react";
import { connnect } from "react-redux";
import "./DisplayModeContainer.scss";

class DisplayModeContainer extends Component {
    render() {
      return (
        <div className="DisplayModeContainer">
          Hello
        </div>
      );
    }
}

//const mapDispatchToProps = dispatch => {
  //  return {
    //  displayMode: () => dispatch()
   // };
  //};

//export default connect(null, mapDispatchToProps)(DisplayModeContainer);

export default DisplayModeContainer;