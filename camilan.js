document.addEventListener("DOMContentLoaded", function() {

    // 1. Efek Scroll: Menambahkan animasi pada elemen saat scroll
    const scrollElements = document.querySelectorAll('.fade-in');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        scrollElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if(elementTop < triggerBottom) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Panggil fungsi pertama kali untuk elemen yang sudah di-scroll

    // 2. Efek Hover untuk tombol produk
    const productBtn = document.querySelector('.product-btn');
    productBtn.addEventListener('mouseover', function () {
        productBtn.style.transform = 'scale(1.1)'; // Membesar saat hover
        productBtn.style.transition = 'transform 0.3s ease-in-out';
    });

    productBtn.addEventListener('mouseout', function () {
        productBtn.style.transform = 'scale(1)'; // Kembali ke ukuran semula
    });

    // 3. Efek Hover pada Kartu Minuman
    const drinkCards = document.querySelectorAll('.drink-card');

    drinkCards.forEach((card) => {
        card.addEventListener('mouseover', function () {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseout', function () {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
