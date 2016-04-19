class Command {
	execute() {
		throw new Error('This method must be overwritten!');
	}
	undo() {
		throw new Error('This method must be overwritten!');
	}
}

export default Command;
