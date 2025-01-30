function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
function quickTimeEvent(player) {
    let quickTimeEventContainer = document.getElementById("quickTimeEventContainer");
    let weaponSkinContainer = document.getElementById("weaponSkinContainer");
    weaponSkinContainer.innerHTML = `<img src=${player.gunSkin} style="width: 100%; height: 100%;">`;
    let targetSequence = shuffleArray(["W", "A", "S", "D", "E", "Q"]);
    console.log(targetSequence);
    let currentIndex = 0;
    const timeLimit = 5000;
    let startTime = Date.now();
    // Timer to display remaining time
    const timer = setInterval(() => {
        const remainingTime = 5 - ((Date.now() - startTime) / 1000);
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime.toFixed(1)} seconds`);
        }
    }, 1000);
    const keyHandler = (event) => {
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
            currentIndex++;
            if (currentIndex === targetSequence.length) {
                console.log("Sequence completed successfully!");
                currentIndex = 0;
                startTime = currentTime;
                clearInterval(timer);
                return true;
            }
        }
        else {
            currentIndex = 0;
            startTime = currentTime;
        }
    };
    window.addEventListener('keydown', keyHandler);
}
export { quickTimeEvent };
