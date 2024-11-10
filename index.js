document.addEventListener("DOMContentLoaded", function () {
    // 1. Efek Hover pada Kartu Produk
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)'; // Efek zoom-in
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Menambah bayangan
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Transisi halus
        });

        card.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)'; // Mengembalikan ukuran asli
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Bayangan standar
        });
    });

    // 2. Efek Hover pada Navbar Items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f3d4a1'; // Background terang saat hover
            this.style.color = '#fff'; // Mengubah warna teks saat hover
            this.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        });

        item.addEventListener('mouseout', function () {
            this.style.backgroundColor = ''; // Mengembalikan background ke semula
            this.style.color = ''; // Mengembalikan warna teks ke semula
        });
    });

    // 3. Smooth Scroll saat klik pada menu navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Menghentikan aksi default
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Menambahkan sedikit margin
                    behavior: 'smooth' // Efek smooth scroll
                });
            }
        });
    });

    // 4. Animasi Fade-In untuk Banner dan Hero Section saat halaman dimuat
    const hero = document.querySelector('.hero');
    const banner = document.querySelector('.banner');

    // Menambahkan kelas fadeIn saat banner dan hero muncul
    hero.classList.add('fadeIn');
    banner.classList.add('fadeIn');

    // 5. Navbar Toggle untuk perangkat mobile (Hamburger Menu)
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.nav-links');
    
    navbarToggle.addEventListener('click', function () {
        navbarLinks.classList.toggle('active'); // Toggle navbar
    });
});
