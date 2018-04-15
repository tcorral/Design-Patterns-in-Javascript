import Meal from './Meal';
import VeganBurger from './items/burgers/VeganBurger';
import BeefBurger from './items/burgers/BeefBurger';
import KobeBurger from './items/burgers/KobeBurger';
import Water from './items/drinks/Water';
import Coke from './items/drinks/Coke';
import Champagne from './items/drinks/Champagne';
import Salad from './items/side-dishes/Salad';
import Fries from './items/side-dishes/Fries';
import Crudettes from './items/side-dishes/Crudettes';

class MealBuilder {
    prepareVeganMeal() {
        var meal = new Meal();
        meal.addItem(new VeganBurger());
        meal.addItem(new Water());
        meal.addItem(new Salad());
        return meal;
    }
    prepareNonVeganMeal() {
        var meal = new Meal();
        meal.addItem(new BeefBurger());
        meal.addItem(new Coke());
        meal.addItem(new Fries());
        return meal;
    }
    prepareDeluxeMeal() {
        var meal = new Meal();
        meal.addItem(new KobeBurger());
        meal.addItem(new Champagne());
        meal.addItem(new Crudettes());
        return meal;
    }
}

export default MealBuilder;