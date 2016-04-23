import State from './State';

class DownloadFailedState extends State {
  constructor(download) {
    super();
    this._download = download;
  }

  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log("Try to Download again!");
  }

  pause() {
    throw new Error("You can't pause a failed download!");
  }

  fail() {
    throw new Error("A failed download can't fail itself!");
  }

  finish() {
    throw new Error("A failed download is not finished!");
  }
}

export default DownloadFailedState;
