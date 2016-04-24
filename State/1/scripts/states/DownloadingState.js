import State from './State';

class DownloadingState extends State {
  constructor(download) {
    super();
    this._download = download;
  }

  download() {
    throw new Error("You can't download a file that is being downloaded already!");
  }

  pause() {
    this._download.setState(this._download.getDownloadPausedState());
    console.log("Pause download!");
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

export default DownloadingState;
