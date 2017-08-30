import React from "react";
import Emoji from "./common/emoji.jsx";
import Manager from "./Manager/PalleteManager";

export default class Item extends Emoji {
  constructor(props) {
    super(props);
    this.state = {
      emojiRaw: this.props.emoji
    };
    this.manager = new Manager(props.parent, this);
  }

  render() {
    return (
      <img
        src={this.emoji()}
        onClick={this.manager.selectEmoji}
        onDragStart={this.manager.selectEmoji}
        className={`emoji-item ${this.manager.isSelected()}`}
        title={`:${this.state.emojiRaw}:`}
      />
    );
  }
}
