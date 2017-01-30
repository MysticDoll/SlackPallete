import React from "react";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  getRaw() {
    return this.props.getRawEmoji();
  }

  closeModal() {
    this.props.switchVisible();
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
          value={this.getRaw.bind(this)()}
          style={{
            width: "500px",
            height: "180px",
            display: "block"
          }}
        ></textarea>
        <button className={"btn btn-default"} onClick={this.closeModal.bind(this)}>Close</button>
        </div>
      </div>
    );
  }
}
