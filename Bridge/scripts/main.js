import GreyColor from './GreyColor';
import FamilyCar from './FamilyCar';
import MatteBlackColor from './MatteBlackColor';
import Adventure4x4Car from './Adventure4X4Car';
import RedColor from './RedColor';
import UrbanCar from './UrbanCar';

const familyCar = new FamilyCar(new GreyColor());
const adventureCar = new Adventure4x4Car(new MatteBlackColor());
const urbanCar = new UrbanCar(new RedColor());

familyCar.applyColor();
adventureCar.applyColor();
urbanCar.applyColor();