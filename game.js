const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const carWidth = 60;
const carHeight = 100;
let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight - 20;

function drawCar() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(carX, carY, carWidth, carHeight);
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    requestAnimationFrame(drawGame);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && carX > 0) {
        carX -= 10;
    } else if (event.key === 'ArrowRight' && carX < canvas.width - carWidth) {
        carX += 10;
    }
});

drawGame();
