// --- FLOATING HEARTS ---
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💖', '✨', '🌸', '💕'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = Math.random() * 4 + 's';
        heart.style.fontSize = (Math.random() * 12 + 12) + 'px';
        container.appendChild(heart);
    }
}

// --- SISTEM PINDAH HALAMAN (SINGLE PAGE SCREEN) ---
function goToPage(pageNum) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman tujuan
    const targetPage = document.getElementById(`page-${pageNum}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Play Music pas klik tombol pertama
    if (pageNum === 2) {
        const music = document.getElementById('bg-music');
        if (music) {
            music.play().catch(e => console.log("Audio play blocked"));
        }
        triggerConfetti();
    }
}

// --- CONFETTI ---
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// --- AMPLOP SURAT ---
function openEnvelope() {
    const wrapper = document.getElementById('envelopeWrapper');
    wrapper.classList.toggle('open');

    if (wrapper.classList.contains('open')) {
        triggerConfetti();
        document.getElementById('hintText').innerText = "💖 Surat Cinta Terbuka 💖";
    } else {
        document.getElementById('hintText').innerText = "Klik amplop untuk membaca surat";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});