import React from "react";
import Cell from "./cell.jsx";
import Item from "./item.jsx";
import Modal from "./modal.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmoji: "__blank__",
      modalVisible: false
    };
  }

  getEmoji(name) {
    let emoji = this.props.emojiList[name];
    return emoji ? emoji : this.props.emojiList["__blank__"];
  }

  getCurrentEmoji() {
    return this.state.currentEmoji;
  }

  setCurrentEmoji(name) {
    this.setState({currentEmoji: name});
  }

  updateCanvas(row, column, item) {
    this.props.canvas[row][column] = item;
    this.render();
  }

  createCells() {
    return this.props.canvas.map((row, i) => 
      <div>
        {
          row.map((cell, j) =>
            <Cell
              row={i}
              column={j}
              getCurrentEmoji={this.getCurrentEmoji.bind(this)}
              getEmoji={this.getEmoji.bind(this)}
              updateCanvas={this.updateCanvas.bind(this)}
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
                emoji={emoji}
                setCurrentEmoji={this.setCurrentEmoji.bind(this)}
                getCurrentEmoji={this.getCurrentEmoji.bind(this)}
                getEmoji={this.getEmoji.bind(this)}
              ></Item>
            ))
        }
      </div>
    );
  }

  switchVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  getRawEmoji() {
    return this.props.canvas.map(row => row.map(e => `:${e}:`).join("")).join("\n");
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
        <button className="btn btn-info" onClick={this.switchVisible.bind(this)}>Export</button>
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
          getRawEmoji={this.getRawEmoji.bind(this)}
          switchVisible={this.switchVisible.bind(this)}
        ></Modal>
      </div>
    );
  }
}
