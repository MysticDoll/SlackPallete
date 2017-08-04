import React from "react";
import Emoji from "./common/emoji.jsx";
import Manager from "./Manager/CanvasManager";

export default class Cell extends Emoji {
  constructor(props) {
    super(props);
    this.state = {
      emojiRaw: props.parent.props.blankSymbol
    };
    this.manager = new Manager(props.parent, this);
  }

  render() {
    return (
      <img
        src={this.emoji()}
        draggable={"false"}
        onClick={this.manager.changeEmoji}
        onMouseMove={this.manager.mouseMove()}
        className={"emoji-cell"}
        title={`:${this.state.emojiRaw}:`}
      />
    );
  }
}
