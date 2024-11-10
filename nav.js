document.addEventListener("DOMContentLoaded", function () {
    // 1. Dinamis untuk Tombol Pencarian
    const searchInput = document.querySelector('.search-bar');
    searchInput.addEventListener('focus', function () {
        this.style.backgroundColor = '#E3C59D'; // Ganti warna saat fokus
        this.style.color = '#fff'; // Mengubah warna teks saat fokus
    });

    searchInput.addEventListener('blur', function () {
        this.style.backgroundColor = '#813d3ccb'; // Kembali ke warna semula saat blur
        this.style.color = '#E3C59D'; // Kembali ke warna teks semula
    });

    // 2. Menambahkan animasi pada dropdown
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        dropdown.addEventListener('mouseenter', function () {
            dropdownContent.style.opacity = '0';
            dropdownContent.style.display = 'block';
            setTimeout(() => {
                dropdownContent.style.opacity = '1'; // Efek fade-in saat menampilkan dropdown
            }, 50);
        });

        dropdown.addEventListener('mouseleave', function () {
            dropdownContent.style.opacity = '0';
            setTimeout(() => {
                dropdownContent.style.display = 'none'; // Menyembunyikan dropdown
            }, 300);
        });
    });

    // 3. Membuat Navbar responsif dengan tombol hamburger
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.nav-links');
    
    navbarToggle.addEventListener('click', function () {
        navbarLinks.classList.toggle('active'); // Menambah/menghapus kelas 'active' untuk navbar
        if (navbarLinks.classList.contains('active')) {
            navbarLinks.style.display = 'flex'; // Menampilkan navbar saat aktif
        } else {
            navbarLinks.style.display = 'none'; // Menyembunyikan navbar saat tidak aktif
        }
    });

    // 4. Smooth Scroll untuk Navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Smooth scroll saat klik menu
                });
            }
        });
    });
});
