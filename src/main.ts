import  Person  from "./person.js";
import  Car  from "./car.js";
import  Player  from "./player.js";
import  {getPersons, getCars}  from "./fetch.js";
import  {generatePersonCarCombination}  from "./generatePersonCarCombination.js";


let player = new Player(0, "neutral", ["../player-arckifejezesek/neutral.png", "../player-arckifejezesek/angry.png"], "../fegyver-kepek-skinek/pistol-skin-4.jpg");

console.log(generatePersonCarCombination());
