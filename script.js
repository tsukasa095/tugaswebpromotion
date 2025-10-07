// Efek kirim form sederhana
    document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        document.getElementById(
        "formMessage"
        ).textContent = `Terima kasih, ${name}! Pesan Anda telah terkirim.`;
        this.reset();
    });

    // Highlight menu aktif saat klik
    document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", () => {
        document
        .querySelectorAll(".sidebar a")
        .forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
    });

// === PEMUTAR MUSIK OTOMATIS + AKTIF SETELAH KLIK ===
const playBtn = document.getElementById("playBtn");
const bgMusic = document.getElementById("bgMusic");
const musicStatus = document.getElementById("musicStatus");
const promoVideo = document.getElementById("promoVideo");

let isPlaying = true;

// Pastikan musik dan video mulai muted
bgMusic.muted = true;
promoVideo.muted = true;

// Mainkan musik saat halaman dimuat
window.addEventListener("load", () => {
    bgMusic.play().catch(() => {});
    promoVideo.play().catch(() => {});
});

// Klik pertama di halaman → aktifkan suara
document.addEventListener("click", () => {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        promoVideo.muted = false;
        musicStatus.textContent = "Musik Hidup";
    }
});

// Tombol Play/Pause manual
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        bgMusic.pause();
        playBtn.textContent = "▶️";
        musicStatus.textContent = "Musik Mati";
    } else {
        bgMusic.play();
        playBtn.textContent = "⏸️";
        musicStatus.textContent = "Musik Hidup";
    }
    isPlaying = !isPlaying;
});

