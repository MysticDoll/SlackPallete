export default class CanvasManager {
  constructor(app, cell) {
    this.app = app;
    this.cell = cell;
  }

  getEmoji(name) {
    let emoji = this.app.props.emojiList[name];
    return emoji ? emoji : this.app.props.emojiList["blank"];
  }

  getCurrentEmoji() {
    return this.app.state.currentEmoji;
  }

  updateCanvas(row, column, item) {
    let canvas = this.app.state.canvas;
    canvas[row][column] = item;
    this.app.setState({canvas: canvas});
  }

  get changeEmoji() {
    return () => {
      this.cell.setState({emojiRaw: this.getCurrentEmoji()});
      this.updateCanvas(this.cell.props.row, this.cell.props.column, this.getCurrentEmoji());
    };
  }

  mouseMove() {
    return (e) => {
      if(e.buttons === 1) {
        this.changeEmoji();
      }
    };
  }
}
