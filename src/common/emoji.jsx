import React from "react";
export default class Emoji extends React.Component {
  constructor(props) {
    super(props);
  }

  emoji() {
    return this.props.getEmoji(this.state.emojiRaw);
  }
}
