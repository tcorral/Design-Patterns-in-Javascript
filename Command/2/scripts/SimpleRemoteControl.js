import SimpleRemoteControl from '../../common/SimpleRemoteControl';

class SimpleRemoteControl2 extends SimpleRemoteControl {
  buttonUndoWasPressed() {
    this.command.undo();
  }
}

export default SimpleRemoteControl2;
