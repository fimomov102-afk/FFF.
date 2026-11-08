
const welcome = document.getElementById("welcome");
const letterSection = document.getElementById("letterSection");
const messageSection = document.getElementById("messageSection");
const questionSection = document.getElementById("questionSection");

const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");
const readBtn = document.getElementById("readBtn");
const clickText = document.getElementById("clickText");
const questionBtn = document.getElementById("questionBtn");

const yesBtn = document.getElementById("yesBtn");
const timeBtn = document.getElementById("timeBtn");
const response = document.getElementById("response");

// 1. Welcome sahifasidan konvertga o'tish va musiqani boshlash

startBtn.addEventListener("click", () => {

    playMusic(); // MUSIQA BOSHLANADI

    welcome.classList.add("hidden");
    letterSection.classList.remove("hidden");
});

// 2. Konvertni ochish

envelope.addEventListener("click", () => {
    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    clickText.classList.add("hidden");

    setTimeout(() => {
        readBtn.classList.remove("hidden");
    }, 900);
});

// 3. Maktubni o'qish

readBtn.addEventListener("click", () => {
    letterSection.classList.add("hidden");
    messageSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 4. Maxsus savolga o'tish

questionBtn.addEventListener("click", () => {
    messageSection.classList.add("hidden");
    questionSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 5. YES tugmasi

yesBtn.addEventListener("click", () => {

    response.innerHTML = `
        <h3>That makes me so happy! ❤️</h3>

        <p>
        Thank you, Farangiz!
        I hope this is the beginning of something beautiful.
        </p>

        <p>
        Rahmat, Farangiz!
        Bu go'zal bir boshlanish bo'lishiga umid qilaman.
        </p>

        <div style="font-size:35px; margin-top:10px;">
            💗 🌷 💗
        </div>
    `;

    response.classList.remove("hidden");

    yesBtn.disabled = true;
    timeBtn.disabled = true;

    createHearts();
});

// 6. Vaqt kerak tugmasi

timeBtn.addEventListener("click", () => {

    response.innerHTML = `
        <h3>Of course, Farangiz! 🌸</h3>

        <p>
        Take all the time you need.
        I respect your feelings and your decision.
        </p>

        <p>
        Albatta, shoshilma.
        His-tuyg'ularingni va qaroringni hurmat qilaman.
        </p>

        <div style="font-size:35px; margin-top:10px;">
            🌷 💗 🌷
        </div>
    `;

    response.classList.remove("hidden");

    yesBtn.disabled = true;
    timeBtn.disabled = true;
});

// 7. Yurakchalar effekti

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 3s linear, opacity 3s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(360deg)`;

            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 3200);
    }
}

// 8. Uchib tushadigan gulbarglar

const petals = document.getElementById("petals");

for (let i = 0; i < 20; i++) {

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "♥";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 8) + "s";
    petal.style.animationDelay = Math.random() * 8 + "s";
    petal.style.fontSize = (12 + Math.random() * 15) + "px";

    petals.appendChild(petal);
}
const music = new Audio("music/romantic.mp3");

music.loop = true;
music.volume = 0.25;

function playMusic() {
    music.play().catch(error => {
        console.log("Musiqani boshlash uchun foydalanuvchi harakati kerak.");
    });
}