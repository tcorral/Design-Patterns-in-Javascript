class Lazy {
  constructor(container, text, date) {
    this.container = container;
    this.update(text, date);
  }

  static addZero(time) {
    return time < 10 ? '0' + time : time;
  }

  getFormattedTime(date) {
    return Lazy.addZero(date.getHours()) + ":" + Lazy.addZero(date.getMinutes()) + ":" + Lazy.addZero(date.getSeconds());
  }

  update(text, date) {
    this.container.innerHTML = `
      <div>
        <div>
          Not changed:
          <span>
            ${this.getFormattedTime(new Date())}
          </span>
        </div>
        <span class="text">
          ${text}
        </span>
        <span class="time">
          ${this.getFormattedTime(date)}
        </span>
      </div>
    `;
    this.update = (text, date) => {
      var textNode = this.container.querySelector('.text');
      var timeNode = this.container.querySelector('.time');
      textNode.innerHTML = text;
      timeNode.innerHTML = this.getFormattedTime(date);
    };
  }
}

export default Lazy;
