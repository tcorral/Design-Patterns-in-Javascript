class SimpleRemoteControl {
	constructor() {
		this.command = null;
	}
	setCommand(command) {
		this.command = command;
	}
	buttonWasPressed() {
		this.command.execute();
	}
	buttonUndoWasPressed() {
		this.command.undo();
	}
}

export default SimpleRemoteControl;
