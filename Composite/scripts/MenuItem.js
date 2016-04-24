import MenuComponent from './MenuComponent';

class MenuItem extends MenuComponent {
  print() {
    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
  }
}

export default MenuItem;
