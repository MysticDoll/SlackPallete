import React from "react";
import Cell from "./cell.jsx";
import Item from "./item.jsx";
import Modal from "./modal.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: this.props.canvas,
      currentEmoji: this.props.blankSymbol,
      modalVisible: false
    };
  }

  getEmoji(name) {
    let emoji = this.props.emojiList[name];
    return emoji ? emoji : this.props.emojiList["blank"];
  }

  getCurrentEmoji() {
    return this.state.currentEmoji;
  }

  setCurrentEmoji(name) {
    this.setState({currentEmoji: name});
  }

  updateCanvas(row, column, item) {
    let canvas = this.state.canvas;
    canvas[row][column] = item;
    this.setState({canvas: canvas});
  }

  createCells() {
    return this.state.canvas.map((row, i) => 
      <div key={i}>
        {
          row.map((cell, j) =>
            <Cell
              key={j}
              row={i}
              column={j}
              parent={this}
            ></Cell>
          )
        }
      </div>
    );
  }

  createPallete() {
    return (
      <div>
        {
          Object.keys(this.props.emojiList)
            .map(emoji => (
              <Item
                key={emoji}
                emoji={emoji}
                parent={this}
              ></Item>
            ))
        }
      </div>
    );
  }

  get switchVisible() {
    return () => this.setState({modalVisible: !this.state.modalVisible});
  }

  getRawEmoji() {
    return this.state.canvas.map(row => row.map(e => `:${e}:`).join("")).join("\n");
  }

  getVisibility() {
    return this.state.modalVisible ? "block" : "none";
  }

  render() {
    return (
      <div>
        <div className={"row"}>
          <div className={"emoji-canvas col-md-12"}>
            <h2>Canvas</h2>
          </div>
          <div className={"emoji-canvas col-md-12"}>
            {this.createCells()}
          </div>
        </div>
        <button className="btn btn-info" onClick={this.switchVisible}>Export</button>
        <div className={"row"}>
          <div className={"emoji-pallete col-md-12"}>
            <h2>Pallete</h2>
          </div>
          <div className={"emoji-pallete col-md-12"}>
            {this.createPallete()}
          </div>
        </div>
        <Modal
          visible={this.getVisibility()}
          parent={this}
        ></Modal>
      </div>
    );
  }
}
