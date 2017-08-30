export default class ModalManager {
  constructor(app, modal) {
    this.app = app;
    this.modal = modal;
  }

  switchVisible() {
    let isVisible = !this.app.state.modalVisible;
    this.app.setState({modalVisible: isVisible});
  }

  removeVerboseBlank(rawValue) {
    return rawValue.replace(new RegExp(`(:${this.app.props.blankSymbol}:)+($|\\n)`, "g"), "\n");
  }

  getRawEmoji() {
    return this.app.state.canvas.map(row => row.map(e => `:${e}:`).join("")).join("\n");
  }

  getRaw() {
    return this.removeVerboseBlank(this.getRawEmoji());
  }

  closeModal() {
    return () => this.switchVisible();
  }
}
