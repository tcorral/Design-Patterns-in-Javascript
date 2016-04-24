import Command from './Command';

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

export default LightOnCommand;
