import  Person  from "./person.js";
import  Car  from "./car.js";
import  Player  from "./player.js";
import  {getPersons, getCars}  from "./fetch.js";
import  {generatePersonCarCombination}  from "./generatePersonCarCombination.js";
import { quickTimeEvent } from "./quickTimeEvent.js";


let player = new Player(0, "neutral", ["../player-arckifejezesek/neutral.png", "../player-arckifejezesek/angry.png"], "../fegyver-kepek-skinek/ak-skin-1.png");

console.log(generatePersonCarCombination());




// console.log(quickTimeEvent(player));