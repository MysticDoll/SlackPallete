import React from "react";
import Manager from "./Manager/ModalManager";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.manager = new Manager(props.parent, this);
  }

  render() {
    return (
      <div 
        style={{
          display: this.props.visible,
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          backgroundColor: "rgba(0, 0, 0, .8)"
        }}
      >
      <div className={"modal-body"}
        style={{
          width: "600px",
          height: "250px",
          margin: "20% 40%",
          backgroundColor: "#FFF"
        }}
      >
        <textarea
          readOnly={true}
          value={this.manager.getRaw()}
          style={{
            width: "500px",
            height: "180px",
            display: "block"
          }}
        ></textarea>
        <button className={"btn btn-default"} onClick={this.manager.closeModal()}>Close</button>
        </div>
      </div>
    );
  }
}
