import MealBuilder from './MealBuilder';

var mealBuilder = new MealBuilder();

var veganMeal = mealBuilder.prepareVeganMeal();

veganMeal.showItems();
console.log(`Vegan meal cost: $${veganMeal.getCost()}`);

var nonVeganMeal = mealBuilder.prepareNonVeganMeal();

nonVeganMeal.showItems();
console.log(`Non vegan meal cost: $${nonVeganMeal.getCost()}`);

var deluxeMeal = mealBuilder.prepareDeluxeMeal();

deluxeMeal.showItems();
console.log(`Deluxe meal cost: $${deluxeMeal.getCost()}`);

