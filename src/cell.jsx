import React from "react";
import Emoji from "./common/emoji.jsx";

export default class Cell extends Emoji {
  constructor(props) {
    super(props);
    this.state = {
      emojiRaw: this.props.blankSymbol
    };
  }

  changeEmoji() {
    this.setState({emojiRaw: this.props.getCurrentEmoji()});
    this.props.updateCanvas(this.props.row, this.props.column, this.props.getCurrentEmoji());
  }

  mouseMove(e) {
    if(e.buttons === 1) {
      this.changeEmoji();
    }
  }

  render() {
    return (
      <img
        src={this.emoji()}
        draggable={"false"}
        onClick={this.changeEmoji.bind(this)}
        onMouseMove={this.mouseMove.bind(this)}
        className={"emoji-cell"}
        title={`:${this.state.emojiRaw}:`}
      />
    );
  }
}
