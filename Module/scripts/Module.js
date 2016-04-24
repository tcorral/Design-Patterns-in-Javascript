function Module(container) {
  return new class {
    get container() {
      return container;
    }

    init() {
      this.container.innerHTML = 'Test module';
    }

    destroy() {
      this.container.innerHTML = '';
      delete this.container;
    }
  }
}

export default Module;
