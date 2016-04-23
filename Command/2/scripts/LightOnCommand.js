import LightOnCommand from '../../common/LightOnCommand';
;

class LightOnCommand2 extends LightOnCommand {
  undo() {
    this.light.off();
  }
}

export default LightOnCommand2;
