import SimpleRemoteControl from './SimpleRemoteControl';
import Light from '../../common/Light';
import LightOnCommand from './LightOnCommand';

let simpleRemoteControl = new SimpleRemoteControl();
let light = new Light();
let lightCommand = new LightOnCommand(light);

simpleRemoteControl.setCommand(lightCommand);
simpleRemoteControl.buttonWasPressed();
simpleRemoteControl.buttonUndoWasPressed();
