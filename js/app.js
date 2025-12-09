<<<<<<< HEAD
// Bunga jatuh
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  const flowers = ["💮", "🌸", "🌺", "🌷"];
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 4 + Math.random() * 5 + "s";
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 500);

// Musik background
const bgm = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (isPlaying) {
    bgm.pause();
    btn.textContent = "Putar Musik";
    isPlaying = false;
  } else {
    bgm.volume = 0.4;
    bgm.play();
    btn.textContent = "Hentikan Musik";
    isPlaying = true;
  }
});

// Komentar pengunjung
function kirimKomentar() {
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  if (nama === "" || pesan === "") {
    alert("Nama dan komentar harus diisi ya 💗");
    return;
  }

  const box = document.getElementById("hasilKomentar");
  box.innerHTML += `<p><strong>${nama}:</strong> ${pesan}</p>`;

  document.getElementById("nama").value = "";
  document.getElementById("pesan").value = "";
}
=======
// Bunga jatuh
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  const flowers = ["💮", "🌸", "🌺", "🌷"];
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 4 + Math.random() * 5 + "s";
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 500);

// Musik background
const bgm = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (isPlaying) {
    bgm.pause();
    btn.textContent = "Putar Musik";
    isPlaying = false;
  } else {
    bgm.volume = 0.4;
    bgm.play();
    btn.textContent = "Hentikan Musik";
    isPlaying = true;
  }
});

// Komentar pengunjung
function kirimKomentar() {
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  if (nama === "" || pesan === "") {
    alert("Nama dan komentar harus diisi ya 💗");
    return;
  }

  const box = document.getElementById("hasilKomentar");
  box.innerHTML += `<p><strong>${nama}:</strong> ${pesan}</p>`;

  document.getElementById("nama").value = "";
  document.getElementById("pesan").value = "";
}
>>>>>>> ee59f00c822f94e75b42f475f693b95e068ff58b
