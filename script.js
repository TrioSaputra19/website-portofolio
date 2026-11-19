// Mobile Navigation Toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
}

// Portfolio Contact Form Submission
const contactForm = document.getElementById('portfolioContactForm');
const formSuccessMsg = document.getElementById('formSuccessMsg');

if (contactForm && formSuccessMsg) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccessMsg.classList.remove('hidden');
    contactForm.reset();

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      formSuccessMsg.classList.add('hidden');
    }, 5000);
  });
}

// Animasi Tulisan Mengetik & Berjalan (Hero Typewriter Effect)
const typewriterEl = document.getElementById('hero-typewriter');
if (typewriterEl) {
  const roles = [
    'Full Stack Developer',
    'Digital Architect',
    'Creative Problem Solver',
    'Cloud & System Engineer',
    'UI/UX Enthusiast'
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function handleTypewriter() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      typewriterEl.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      typewriterEl.textContent = current.substring(0, charIdx);
    }

    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && charIdx === current.length) {
      // Tunggu sebentar saat kata selesai diketik
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      // Pindah ke kata berikutnya
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 350;
    }

    setTimeout(handleTypewriter, speed);
  }

  handleTypewriter();
}

// Animasi Tulisan Berjalan untuk Title "Hi, I'm Trio Saputra."
const titleTypewriterEl = document.getElementById('hero-title-typewriter');
if (titleTypewriterEl) {
  const titles = [
    "Hi, I'm Trio Saputra.",
    "Halo, Saya Trio Saputra.",
    "Hello! I'm Trio Saputra.",
    "Welcome, I'm Trio Saputra."
  ];
  let titleIdx = 0;
  let tCharIdx = 0;
  let tIsDeleting = false;

  function handleTitleTypewriter() {
    const fullText = titles[titleIdx];

    if (tIsDeleting) {
      tCharIdx--;
    } else {
      tCharIdx++;
    }

    const currentSub = fullText.substring(0, tCharIdx);

    // Styling khusus jika nama "Trio Saputra" sedang/telah diketik
    if (currentSub.includes("Trio Saputra")) {
      const parts = currentSub.split("Trio Saputra");
      titleTypewriterEl.innerHTML = `${parts[0]}<span class="name-shimmer underline decoration-electric decoration-4 underline-offset-8">Trio Saputra</span>${parts[1] || ''}`;
    } else {
      titleTypewriterEl.textContent = currentSub;
    }

    let tSpeed = tIsDeleting ? 35 : 75;

    if (!tIsDeleting && tCharIdx === fullText.length) {
      tSpeed = 2500; // Tahan sejenak agar nama dapat dibaca jelas
      tIsDeleting = true;
    } else if (tIsDeleting && tCharIdx === 0) {
      tIsDeleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      tSpeed = 400;
    }

    setTimeout(handleTitleTypewriter, tSpeed);
  }

  handleTitleTypewriter();
}

// Animasi Pergantian Filosofi / Tagline Quote
const quoteEl = document.getElementById('hero-quote-text');
if (quoteEl) {
  const quotes = [
    "Turning Ideas Into Digital Experiences.",
    "Architecting Scalable & High-Impact Solutions.",
    "Bridging Engineering Logic with Intuitive Design.",
    "Crafting Clean Code with Modern Web Standards."
  ];
  let qIdx = 0;

  setInterval(() => {
    // Fade out & slight slide up
    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(-6px)';

    setTimeout(() => {
      qIdx = (qIdx + 1) % quotes.length;
      quoteEl.textContent = quotes[qIdx];
      // Fade in & slide back to position
      quoteEl.style.opacity = '1';
      quoteEl.style.transform = 'translateY(0)';
    }, 400);
  }, 4800);
}
