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

    console.log("generalas elott:", persons);
    
    const randomPersonNum: number = Math.floor(Math.random() * (persons.length));
    const randomCarNum: number = Math.floor(Math.random() * (cars.length));
        
    console.log('szemely:', persons[randomPersonNum]);
    return [persons[randomPersonNum], cars[randomCarNum]];
    
    
    
}

export  {generatePersonCarCombination};