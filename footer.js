document.addEventListener('DOMContentLoaded', function () {
    // 1. Efek Hover pada Link Footer
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#E3C59D'; // Warna latar belakang saat hover
            this.style.color = '#fff'; // Mengubah warna teks saat hover
            this.style.transition = 'background-color 0.3s ease, color 0.3s ease'; // Animasi transisi
        });

        link.addEventListener('mouseout', function () {
            this.style.backgroundColor = ''; // Mengembalikan warna latar belakang
            this.style.color = ''; // Mengembalikan warna teks
        });
    });

    // 2. Expandable Section pada Footer
    const expandableSections = document.querySelectorAll('.expandable');
    expandableSections.forEach(section => {
        const sectionTitle = section.querySelector('h3');
        sectionTitle.addEventListener('click', function () {
            const content = section.querySelector('ul');
            const isExpanded = content.style.display === 'block';
            content.style.display = isExpanded ? 'none' : 'block'; // Toggle tampilkan atau sembunyikan
            sectionTitle.style.color = isExpanded ? '#E3C59D' : '#f3d4a1'; // Mengubah warna judul saat expand
        });
    });

    // 3. Menambahkan animasi saat footer muncul
    const footer = document.querySelector('footer');
    window.addEventListener('scroll', function () {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerPosition <= windowHeight) {
            footer.classList.add('animate-footer');
        }
    });

    // 4. Mengubah Tampilan Footer (Background Color, Ukuran)
    const footerToggleBtn = document.querySelector('.footer-toggle-btn');
    footerToggleBtn.addEventListener('click', function () {
        const footer = document.querySelector('footer');
        footer.classList.toggle('expanded-footer');
    });

    // 5. Smooth Scroll ke Bagian Footer
    const footerNavLinks = document.querySelectorAll('.footer-links a');
    footerNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Menggunakan smooth scroll
                });
            }
        });
    });
});
