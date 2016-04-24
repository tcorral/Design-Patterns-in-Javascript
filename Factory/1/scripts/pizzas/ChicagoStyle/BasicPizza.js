import Pizza from '../../Pizza';

class BasicPizza extends Pizza {
  cut() {
    console.log("Cutting the pizza into square slices.");
  }
}

export default BasicPizza;
