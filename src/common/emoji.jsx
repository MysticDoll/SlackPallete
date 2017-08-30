import React from "react";
export default class Emoji extends React.Component {
  constructor(props) {
    super(props);
  }

  emoji() {
    return this.manager.getEmoji(this.state.emojiRaw);
  }
}
