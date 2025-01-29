import  Person  from "./person.js";
import  Car  from "./car.js";
import  Player  from "./player.js";
import  {getPersons, getCars}  from "./fetch.js";



async function generatePersonCarCombination() {
    
    let persons = await getPersons();
    if(persons == null) {
        persons = [];
    }
    let cars = await getCars();
    if(cars == null) {
        cars = [];
    }
    const randomPersonNum: number = Math.floor(Math.random() * (persons.length + 1));
    const randomCarNum: number = Math.floor(Math.random() * (cars.length + 1));
        
    return [persons[randomPersonNum], cars[randomCarNum]];
    
    
}