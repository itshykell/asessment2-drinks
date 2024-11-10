document.addEventListener("DOMContentLoaded", function () {
    // Animasi hover pada kartu minuman (zoom in dan shadow)
    const drinkCards = document.querySelectorAll('.drink-card');
    drinkCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)'; // Memperbesar sedikit
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Menambahkan bayangan
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Animasi transisi
        });

        card.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Dropdown menu dengan animasi
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdown.addEventListener('mouseenter', function () {
            dropdownContent.style.display = 'block'; // Menampilkan dropdown saat hover
            dropdownContent.style.opacity = '1';
            dropdownContent.style.transition = 'opacity 0.3s ease'; // Efek transisi untuk opacity
        });

        dropdown.addEventListener('mouseleave', function () {
            dropdownContent.style.opacity = '0';
            setTimeout(() => {
                dropdownContent.style.display = 'none'; // Menyembunyikan dropdown setelah transisi selesai
            }, 300);
        });
    });

    // Menambahkan smooth scrolling saat navigasi
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Menghentikan aksi default klik
            const targetId = this.getAttribute('href'); // Mendapatkan href untuk menentukan bagian yang akan digulir
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Scroll sedikit ke atas
                    behavior: 'smooth' // Scroll halus
                });
            }
        });
    });

    // Efek animasi pada tombol "Product"
    const productBtn = document.querySelector('.product-btn');
    if (productBtn) {
        productBtn.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        productBtn.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });

        productBtn.addEventListener('click', function () {
            alert('Produk dipilih!'); // Tampilkan alert saat tombol diklik (opsional)
        });
    }

    // Efek fade-in pada halaman saat pertama kali dimuat
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('fadeIn');
    }
});

// Animasi fade-in CSS
document.styleSheets[0].insertRule(`
    .fadeIn {
        opacity: 0;
        animation: fadeInAnimation 2s forwards;
    }

    @keyframes fadeInAnimation {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`, document.styleSheets[0].cssRules.length);
