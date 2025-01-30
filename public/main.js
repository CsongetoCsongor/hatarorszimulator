import Player from "./player.js";
import { generatePersonCarCombination } from "./generatePersonCarCombination.js";
import { quickTimeEvent } from "./quickTimeEvent.js";
let player = new Player(0, "neutral", ["../player-arckifejezesek/neutral.png", "../player-arckifejezesek/angry.png"], "../fegyver-kepek-skinek/pistol-skin-4.jpg");
console.log(generatePersonCarCombination());
console.log(quickTimeEvent(player));
