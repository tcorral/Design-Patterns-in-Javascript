import Command from '../../common/Command';

class Command2 extends Command {
  undo() {
    throw new Error('This method must be overwritten!');
  }
}

export default Command2;
