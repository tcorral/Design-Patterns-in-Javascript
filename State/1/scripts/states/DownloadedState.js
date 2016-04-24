import State from './State';

class DownloadedState extends State {
  constructor(download) {
    super();
    this._download = download;
  }

  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log("Download again!");
  }

  pause() {
    throw new Error("You can't pause a downloaded file!");
  }

  fail() {
    throw new Error("A downloaded file can't fail!");
  }

  finish() {
    throw new Error("A downloaded file can't finish itself!");
  }
}

export default DownloadedState;
