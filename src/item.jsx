import React from "react";
import Emoji from "./common/emoji.jsx";

export default class Item extends Emoji {
  constructor(props) {
    super(props);
    this.state = {
      emojiRaw: this.props.emoji
    };
  }

  selectEmoji() {
    this.props.setCurrentEmoji(this.state.emojiRaw);
  }

  isSelected() {
    return this.props.getCurrentEmoji() === this.state.emojiRaw ? "emoji-item-selected" : "";
  }

  render() {
    return (
      <img
        src={this.emoji()}
        onClick={this.selectEmoji.bind(this)}
        className={`emoji-item ${this.isSelected.bind(this)()}`}
        title={`:${this.state.emojiRaw}:`}
      />
    );
  }
}
