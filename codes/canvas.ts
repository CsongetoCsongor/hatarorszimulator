const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// Méretezés a képernyőhöz
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Körök tömbje
const circles: Circle[] = [];

// Véletlenszám generátor
function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Kör osztály
class Circle {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;

    constructor(x: number, y: number, radius: number, color: string, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw(): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(): void {
        // Mozgatás
        this.x += this.speedX;
        this.y += this.speedY;

        // Ütközés az ablak szélével
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }

        this.draw();
    }
}

// Körök létrehozása
for (let i = 0; i < 50; i++) {
    const radius = random(10, 30);
    const x = random(radius, canvas.width - radius);
    const y = random(radius, canvas.height - radius);
    const color = `rgb(${Math.floor(random(0, 255))}, ${Math.floor(random(0, 255))}, ${Math.floor(random(0, 255))})`;
    const speedX = random(-2, 2);
    const speedY = random(-2, 2);
    circles.push(new Circle(x, y, radius, color, speedX, speedY));
}

// Animációs ciklus
function animate(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => circle.update());
    requestAnimationFrame(animate);
}

animate();

// Ablakméret változás kezelése
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});