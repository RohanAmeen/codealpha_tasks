function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item) => {
        const title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
