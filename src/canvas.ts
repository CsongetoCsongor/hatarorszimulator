document.addEventListener('DOMContentLoaded', () => {
    // Canvas inicializálás
    const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('startButton') as HTMLButtonElement;
    const message = document.getElementById('message') as HTMLDivElement;

    if (!ctx || !startButton || !message) {
        console.error('Canvas context, startButton vagy message nem található!');
        return;
    }

    // Méretezés a képernyőhöz
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        adjustImagePosition();
    }

    // Háttérkép betöltése
    const background = new Image();
    background.src = 'ut2.jpg'; // Helyettesítsd a kívánt háttérkép URL-jével
    background.onerror = () => console.error('Nem sikerült betölteni a háttérképet!');

    // Kép osztály
    class ImageObject {
        x: number;
        y: number;
        width: number;
        height: number;
        img: HTMLImageElement;
        speedX: number;

        constructor(x: number, y: number, width: number, height: number, imgSrc: string, speedX: number) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.img = new Image();
            this.img.src = imgSrc;
            this.img.onerror = () => console.error('Nem sikerült betölteni a képet:', imgSrc);
            this.speedX = speedX;
        }

        draw(): void {
            if (this.img.complete && this.img.naturalWidth !== 0) {
                ctx!.drawImage(this.img, this.x, this.y, this.width, this.height);
            } else {
                console.error('A kép még nem áll készen a kirajzolásra!');
            }
        }

        update(): void {
            // Mozgatás balról jobbra, megáll a képernyő közepén
            if (this.x + this.width < canvas.width / 2) {
                this.x += this.speedX;
            }

            this.draw();
        }

        moveToEnd(): void {
            // Folytatás a képernyő jobb széléig
            if (this.x + this.width < canvas.width) {
                this.x += this.speedX;
            } else {
                this.x = canvas.width - this.width; // Rögzítés a képernyő szélén
            }

            this.draw();
        }
    }

    // Egyetlen kép létrehozása
    const imageWidth = 100;
    const imageHeight = 100;
    let y = (canvas.height - imageHeight) / 2; // Kép középre helyezése függőlegesen
    const speedX = 3;
    const imageObject = new ImageObject(-imageWidth, y, imageWidth, imageHeight, './terv/határőr_terv.png', speedX);

    // Állapotváltozók
    let isMoving = false;
    let hasReachedMiddle = false;
    let hasReachedEnd = false;

    // Frissítse a kép helyzetét a canvas méretének változásakor
    function adjustImagePosition() {
        y = (canvas.height - imageHeight) / 2;
        imageObject.y = y;
    }

    // Animációs ciklus
    function animate(): void {
        ctx!.clearRect(0, 0, canvas.width, canvas.height);

        // Háttérkép kirajzolása
        if (background.complete && background.naturalWidth !== 0) {
            ctx!.drawImage(background, 0, 0, canvas.width, canvas.height);
        } else {
            console.error('A háttérkép még nem áll készen a kirajzolásra!');
        }

        if (!hasReachedMiddle) {
            imageObject.update();
            if (imageObject.x + imageObject.width >= canvas.width / 2) {
                hasReachedMiddle = true;
                isMoving = false;
                message.style.display = 'block'; // Üzenet megjelenítése
            }
        } else if (isMoving && !hasReachedEnd) {
            imageObject.moveToEnd();
            if (imageObject.x + imageObject.width >= canvas.width) {
                hasReachedEnd = true;
                cancelAnimationFrame(animationId);
                message.style.display = 'none'; // Üzenet eltüntetése
            }
        }

        if (!hasReachedEnd) {
            animationId = requestAnimationFrame(animate);
        }
    }

    let animationId = requestAnimationFrame(animate);

    // Amikor a háttérkép betöltődik, indítjuk az animációt
    background.onload = () => {
        animate();
    };

    // Gomb eseménykezelő
    startButton.addEventListener('click', () => {
        if (hasReachedMiddle && !hasReachedEnd) {
            isMoving = true;
            animate();
        }
    });

    // Ablakméret változás kezelése
    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    // Az inicializáláskor beállítjuk a canvas méretét
    resizeCanvas();
});