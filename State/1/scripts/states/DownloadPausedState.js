import State from './State';

class DownloadPausedState extends State {
  constructor(download) {
    super();
    this._download = download;
  }

  download() {
    this._download.setState(this._download.getDownloadingState());
    console.log("Continue Download!");
  }

  pause() {
    throw new Error("You can't pause a paused download!");
  }

  fail() {
    this._download.setState(this._download.getDownloadedFailedState());
    console.log("Download has failed!");
  }

  finish() {
    this._download.setState(this._download.getDownloadedState());
    console.log("Download has finished!");
  }
}

export default DownloadPausedState;
