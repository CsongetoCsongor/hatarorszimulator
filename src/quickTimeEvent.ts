import Person from "./person.js";
import Car from "./car.js";
import Player from "./player.js";
import { getPersons, getCars } from "./fetch.js";

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function quickTimeEvent(player: Player): any {
    let quickTimeEventContainer = document.getElementById("quickTimeEventContainer") as HTMLElement;
    let weaponSkinContainer = document.getElementById("weaponSkinContainer") as HTMLElement;

    weaponSkinContainer.innerHTML = `<img src=${player.gunSkin} style="width: 100%; height: 100%;">`;

    let keysDisplay = document.createElement("div");
    keysDisplay.style.cssText = `
        margin-top: 10px;
        padding: 15px;
        border: 3px solid gold;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        letter-spacing: 10px;
    `;

    let targetSequence = shuffleArray(["W", "A", "S", "D", "E", "Q"]);
    
    // Create individual spans for each key
    keysDisplay.innerHTML = targetSequence.map((key, index) => 
        `<span id="key-${index}" style="padding: 5px; border-radius: 5px;">${key}</span>`
    ).join(" ");
    
    weaponSkinContainer.insertAdjacentElement('afterend', keysDisplay);

    let currentIndex = 0;
    const timeLimit = 5000;
    let startTime = Date.now();

    const timer = setInterval(() => {
        const remainingTime = 5 - ((Date.now() - startTime) / 1000);
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime.toFixed(1)} seconds`);
        }
    }, 1000);

    const keyHandler = (event: KeyboardEvent) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime > timeLimit) {
            console.log("Time's up!");
            currentIndex = 0;
            startTime = currentTime;
            clearInterval(timer);
            return false;
        }

        const pressedKey = event.key.toUpperCase();

        if (pressedKey === targetSequence[currentIndex]) {
            // Highlight the current key in green
            const keyElement = document.getElementById(`key-${currentIndex}`);
            if (keyElement) {
                keyElement.style.backgroundColor = '#4CAF50';
            }
            
            currentIndex++;

            if (currentIndex === targetSequence.length) {
                console.log("Sequence completed successfully!");
                currentIndex = 0;
                startTime = currentTime;
                clearInterval(timer);
                return true;
            }
        } else {
            // Reset all key backgrounds
            targetSequence.forEach((_, index) => {
                const keyElement = document.getElementById(`key-${index}`);
                if (keyElement) {
                    keyElement.style.backgroundColor = 'transparent';
                }
            });
            currentIndex = 0;
            startTime = currentTime;
        }
    };

    window.addEventListener('keydown', keyHandler);
}



export { quickTimeEvent };