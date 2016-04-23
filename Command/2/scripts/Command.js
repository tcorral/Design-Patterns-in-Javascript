import Command from '../../common/Command';

class CommandWithUndo extends Command {
  undo() {
    throw new Error('This method must be overwritten!');
  }
}

export default CommandWithUndo;
