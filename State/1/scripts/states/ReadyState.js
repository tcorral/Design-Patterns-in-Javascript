import State from './State';

class ReadyState extends State {
  constructor(download) {
    super();
    this._download = download;
  }

  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log("Start Download!");
  }

  pause() {
    throw new Error("You can't pause a not started download!");
  }

  fail() {
    throw new Error("A download can't file if is not started!");
  }

  finish() {
    throw new Error("A download can't finish if is not started!");
  }
}

export default ReadyState;
