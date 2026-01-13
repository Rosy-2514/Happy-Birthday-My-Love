
document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    if (music && music.paused) {
        music.play().catch(() => {});
    }
});

function revealSurprise() {

    const surpriseBox = document.getElementById("surprise");
    surpriseBox.classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    music.currentTime = 0;
    music.play().catch(error => {
        console.log("Autoplay blocked, user interaction required", error);
    });

    startConfetti();
}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 200; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 3,
        speed: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
}

function startConfetti() {
    requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(piece => {
        ctx.fillStyle = piece.color;
        ctx.fillRect(piece.x, piece.y, piece.size, piece.size);
        piece.y += piece.speed;

        if (piece.y > canvas.height) {
            piece.y = 0;
            piece.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(updateConfetti);
}

for (let i = 0; i < 40; i++) {
    createSparkle();
}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = Math.random() * 5 + 5 + "s";
    sparkle.style.opacity = Math.random();

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
        createSparkle();
    }, 10000);
}
