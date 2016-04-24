class Light {
  constructor() {
    this._on = false;
  }

  on() {
    this._on = true;
    console.log('Light is on');
  }

  off() {
    this._on = false;
    console.log('Light is off');
  }
}

export default Light;
