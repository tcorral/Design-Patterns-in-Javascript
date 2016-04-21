import State from './State';

class DownloadedState extends State{
	constructor(download) {
		this.download = download;
	}
	download() {
		this.download.setState(this.download.getDownloadingState());
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
