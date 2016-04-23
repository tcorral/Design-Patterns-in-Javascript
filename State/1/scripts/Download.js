import ReadyState from './states/ReadyState';
import DownloadingState from './states/DownloadingState';
import DownloadPausedState from './states/DownloadPausedState';
import DownloadedState from './states/DownloadedState';
import DownloadFailedState from './states/DownloadFailedState';

class Download {
  constructor() {
    this.state = new ReadyState(this);
  }

  setState(state) {
    this.state = state;
  }

  download() {
    this.state.download();
  }

  pause() {
    this.state.pause();
  }

  fail() {
    this.state.fail();
  }

  finish() {
    this.state.finish();
  }

  getReadyState() {
    return new ReadyState(this);
  }

  getDownloadingState() {
    return new DownloadingState(this);
  }

  getDownloadPausedState() {
    return new DownloadPausedState(this);
  }

  getDownloadedState() {
    return new DownloadedState(this);
  }

  getDownloadedFailedState() {
    return new DownloadFailedState(this);
  }
}

export default Download;
