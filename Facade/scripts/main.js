import HomeTheaterFacade from './HomeTheaterFacade';
import Amplifier from './elements/Amplifier';
import DvdPlayer from './elements/DvdPlayer';
import CdPlayer from './elements/CdPlayer';
import Projector from './elements/Projector';
import TheaterLights from './elements/TheaterLights';
import Screen from './elements/Screen';
import PopcornPopper from './elements/PopcornPopper';
import Nikita from './Nikita';

var oHomeTheaterFacade = new HomeTheaterFacade({
  amplifier: new Amplifier(),
  dvdPlayer: new DvdPlayer(),
  cdPlayer: new CdPlayer(),
  projector: new Projector(),
  theaterLights: new TheaterLights(),
  screen: new Screen(),
  popcornPopper: new PopcornPopper()
});
oHomeTheaterFacade.watchMovie(new Nikita());
oHomeTheaterFacade.endMovie();
