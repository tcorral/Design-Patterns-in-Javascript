import Command from './Command';

class LightOnCommand extends Command{
	constructor(light) {
		super();
		this.light = light;
		return this;
	}
	execute() {
		this.light.on();
	}
	undo() {
		this.light.off();
	}
}

export default LightOnCommand;
