// Filtrado de galería
const filterBtns = document.querySelectorAll('.filter-btn');
const galeriaItems = document.querySelectorAll('.galeria-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filtrar items
        const filter = btn.getAttribute('data-filter');
        galeriaItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentImageIndex = 0;
let currentImages = [];

// Abrir lightbox
galeriaItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const visibleImages = Array.from(galeriaItems).filter(img => !img.classList.contains('hidden'));
        currentImages = visibleImages;
        currentImageIndex = visibleImages.indexOf(item);
        showImage(currentImageIndex);
    });
});

function showImage(index) {
    if (currentImages.length === 0) return;
    
    currentImageIndex = (index + currentImages.length) % currentImages.length;
    const img = currentImages[currentImageIndex].querySelector('img');
    const caption = currentImages[currentImageIndex].querySelector('p').textContent;
    
    lightboxContent.src = img.src;
    lightboxContent.alt = img.alt;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
}

// Cerrar lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Navegación en lightbox
prevBtn.addEventListener('click', () => {
    showImage(currentImageIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showImage(currentImageIndex + 1);
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
        if (e.key === 'Escape') lightbox.classList.remove('active');
    }
});

// Agendar cita
function agendar() {
    alert('¡Gracias por tu interés! Por favor, contáctanos por teléfono al +1 (234) 567-890 o por email a info@patitasfelices.com para agendar tu cita.');
}