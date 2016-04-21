class HomeTheaterFacade {
  constructor({ amplifier = null, tuner = null, dvdPlayer = null, cdPlayer = null, projector = null, theaterLights = null, screen = null, popcornPopper = null}) {
    this.amplifier = amplifier;
    this.tuner = tuner;
    this.dvdPlayer = dvdPlayer;
    this.cdPlayer = cdPlayer;
    this.projector = projector;
    this.theaterLights = theaterLights;
    this.screen = screen;
    this.popcornPopper = popcornPopper;
  }

  watchMovie(movie) {
    console.log('Get ready to watch a movie...');

    this.popcornPopper.on();
    this.popcornPopper.pop();

    this.theaterLights.off();

    this.screen.down();

    this.projector.on();
    this.projector.setWideScreenMode();

    this.amplifier.on();
    this.amplifier.setDvdPlayer(this.dvdPlayer);
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(5);

    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  endMovie() {
    console.log("Shutting movie theater down...");
    this.popcornPopper.off();

    this.theaterLights.on();

    this.screen.up();

    this.projector.off();

    this.amplifier.off();

    this.dvdPlayer.stop();
    this.dvdPlayer.eject();
    this.dvdPlayer.off();
  }

  listenToCd(cd) {
    console.log("Start listening your music...");

    this.amplifier.on();
    this.amplifier.setCdPlayer(this.cdPlayer);
    this.amplifier.setStereoSound();
    this.amplifier.setVolume(5);

    this.cdPlayer.on();
    this.cdPlayer.play(cd);
  }

  endCd() {
    console.log("End listening your music or the Cd has finished!");

    this.amplifier.off();

    this.cdPlayer.stop();
    this.cdPlayer.eject();
    this.cdPlayer.off();
  }

  listenToRadio() {
    console.log("Start listening your favorite radio station...");

    this.amplifier.on();
    this.amplifier.setTuner(this.tuner);
    this.amplifier.setStereoSound();
    this.amplifier.setVolume(5);

    this.tuner.on();
    this.tuner.setFm();
    this.tuner.setFrequency(90.9);
  }

  endRadio() {
    console.log("End listening your favorite radio station...");

    this.amplifier.off();

    this.tuner.off();
  }
}

export default HomeTheaterFacade;
