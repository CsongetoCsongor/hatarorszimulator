function quickTimeEvent(player) {
    return new Promise((resolve) => {
        let quickTimeEventContainer = document.getElementById("quickTimeEventContainer");
        let weaponSkinContainer = document.getElementById("weaponSkinContainer");
        let timer1 = document.getElementById("timer1");
        let timer2 = document.getElementById("timer2");
        weaponSkinContainer.innerHTML = `<img src=${player.gunSkin} style="width: 100%; height: 100%;">`;
        // Randomly choose a number of letters between 4 and 7
        const numLetters = Math.floor(Math.random() * 4) + 4; // This will generate a number between 4 and 7
        console.log(`Random number of letters: ${numLetters}`);
        // Create a sequence of random letters, allowing repetition
        let targetSequence = [];
        const availableKeys = ["W", "A", "S", "D", "E", "Q"];
        for (let i = 0; i < numLetters; i++) {
            targetSequence.push(availableKeys[Math.floor(Math.random() * availableKeys.length)]);
        }
        // Shuffle the array to randomize the order
        targetSequence = shuffleArray(targetSequence);
        console.log(targetSequence);
        let keysContainer = document.getElementById("keysContainer");
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
            }
            else {
                console.log("Time's up!");
                timer1.textContent = "0.0";
                timer2.textContent = "0.0";
                currentIndex = 0;
                clearInterval(timer);
                window.removeEventListener('keydown', keyHandler);
                resultMessage.textContent = "Quick Time Event Failed";
                resultMessage.style.color = '#ff4444';
                resolve(false);
            }
        }, 100);
        keysContainer = document.getElementById("keysContainer");
        keysContainer.innerHTML = targetSequence.map((key, index) => `<div id="key-${index}" class="key"><span>${key}</span></div>`).join('');
        const keyHandler = (event) => {
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
                    window.removeEventListener('keydown', keyHandler);
                    resultMessage.textContent = "Quick Time Event Completed";
                    resultMessage.style.color = '#4CAF50';
                    resolve(true);
                }
            }
            else {
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
    });
}
// Shuffle function (this is a helper for randomizing the array)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export { quickTimeEvent };
