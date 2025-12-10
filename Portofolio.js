document.addEventListener('DOMContentLoaded', function() {

    // --- AOS (Animate On Scroll) Initialization ---
    AOS.init({
        duration: 1000, // durasi animasi
        once: true // animasi hanya terjadi sekali
    });

    // --- Typing Effect for Hero Title ---
    const heroTitle = document.getElementById('hero-title');
    const texts = ["Portofolio Individu-Reflektif", "Kepemimpinan dan Keberlanjutan"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeAndDelete() {
        const currentText = texts[textIndex];
    
        // Kecepatan mengetik dan menghapus
        const typingSpeed = isDeleting ? 50 : 120;

        if (!isDeleting) {
            // Logika Mengetik
            heroTitle.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;

            // Jika sudah selesai mengetik, tunggu sebentar lalu mulai menghapus
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeAndDelete, 2000); // Jeda 2 detik sebelum menghapus
                return; // Hentikan eksekusi sementara
        }
        } else {
            // Logika Menghapus
            heroTitle.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;

            // Jika sudah selesai menghapus, pindah ke teks berikutnya
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya, dan kembali ke awal jika sudah di akhir
        }
    }

    // Lanjutkan ke siklus berikutnya
        setTimeout(typeAndDelete, typingSpeed);
    }
    // Mulai animasi
    typeAndDelete();


    // --- Navbar on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // --- Smooth Scrolling for Navigation Links ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Custom Cursor ---
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // --- Loading Screen ---
    window.addEventListener('load', () => {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        setTimeout(() => {
            loaderWrapper.classList.add('fade-out');
        }, 1000); // Loader akan hilang setelah 1 detik
    });

});