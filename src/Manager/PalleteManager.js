export default class PalleteManager {
  constructor(app, item) {
    this.app = app;
    this.item = item;
  }

  getEmoji(name) {
    let emoji = this.app.props.emojiList[name];
    return emoji ? emoji : this.app.props.emojiList["blank"];
  }

  getCurrentEmoji() {
    return this.app.state.currentEmoji;
  }

  setCurrentEmoji(name) {
    this.app.setState({currentEmoji: name});
  }

  get selectEmoji() {
    return (e) => {
      this.setCurrentEmoji(this.item.state.emojiRaw);
      e.preventDefault();
    };
  }

  get isSelected() {
    return () => this.getCurrentEmoji() === this.item.state.emojiRaw ? "emoji-item-selected" : "";
  }
}
