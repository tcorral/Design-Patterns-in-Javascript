import Light from './Light';
import LightOnCommand from './LightOnCommand';
import SimpleRemoteControl from './SimpleRemoteControl';

let oSimpleRemote = new SimpleRemoteControl();
let oLight = new Light();
let oLightCommand = new LightOnCommand(oLight);

oSimpleRemote.setCommand(oLightCommand);
oSimpleRemote.buttonWasPressed();
