class HumanBeing {
    constructor(config) {
        this.skinColor = config.skinColor;
        this.hairColor = config.hairColor;
        this.height = config.height;
        this.weight = config.weight;
        this.gender = config.gender;
        // And more data.
    }
    clone() {
        return new HumanBeing(Object.assign({}, this));
    }
}

export default HumanBeing;