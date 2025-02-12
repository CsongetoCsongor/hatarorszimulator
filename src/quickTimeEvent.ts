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
    let timer1 = document.getElementById("timer1") as HTMLElement;
    let timer2 = document.getElementById("timer2") as HTMLElement;

    weaponSkinContainer.innerHTML = `<img src=${player.gunSkin} style="width: 100%; height: 100%;">`;



    let targetSequence = shuffleArray(["W", "A", "S", "D", "E", "Q"]);
    console.log(targetSequence);

    let keysContainer = document.getElementById("keysContainer") as HTMLElement;
    keysContainer.innerHTML = targetSequence.map(key => `${key}`).join('');

    let resultMessage = document.createElement('div');
    resultMessage.style.cssText = 'text-align: center; color: white; font-size: 24px; margin-top: 20px; font-family: Orbitron; text-shadow: 0 0 5px #4a90e2;';
    quickTimeEventContainer.appendChild(resultMessage);

    let currentIndex = 0;
    const timeLimit = 5000;
    let startTime = Date.now();

    const timer = setInterval(() => {
        const remainingTime = 5 - ((Date.now() - startTime) / 1000);
        if (remainingTime > 0) {
            timer1.textContent = `${remainingTime.toFixed(1)}`;
            timer2.textContent = `${remainingTime.toFixed(1)}`;
        } else {
            console.log("Time's up!");
            timer1.textContent = "0.0";
            timer2.textContent = "0.0";
            currentIndex = 0;
            clearInterval(timer);
            window.removeEventListener('keydown', keyHandler);
            resultMessage.textContent = "Quick Time Event Failed";
            resultMessage.style.color = '#ff4444';
        }
    }, 100);  // Updated to 100ms for smoother updates

    keysContainer = document.getElementById("keysContainer") as HTMLElement;
    keysContainer.innerHTML = targetSequence.map((key, index) =>
        `<div id="key-${index}" class="key"><span>${key}</span></div>`
    ).join('');

    const keyHandler = (event: KeyboardEvent) => {
        const pressedKey = event.key.toUpperCase();

        if (pressedKey === targetSequence[currentIndex]) {
            const keyElement = document.getElementById(`key-${currentIndex}`);
            if (keyElement) {
                keyElement.style.backgroundColor = '#4CAF50';
            }
            currentIndex++;

            if (currentIndex === targetSequence.length) {
                console.log("Sequence completed successfully!");
                currentIndex = 0;
                clearInterval(timer);
                resultMessage.textContent = "Quick Time Event Completed";
                resultMessage.style.color = '#4CAF50';
                return true;
            }
        } else {
            targetSequence.forEach((_, index) => {
                const keyElement = document.getElementById(`key-${index}`);
                if (keyElement) {
                    keyElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                }
            });
            currentIndex = 0;
        }
    };


    window.addEventListener('keydown', keyHandler);
}




export { quickTimeEvent };

