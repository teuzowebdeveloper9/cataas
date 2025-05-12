document.addEventListener('DOMContentLoaded', () => {
    const catImg = document.getElementById('cat');
    const textInput = document.getElementById('text');
    const generateButton = document.getElementById('generate-button');
    const saveButton = document.getElementById('save-button');
    const categorySelect = document.getElementById('category');
    const favoritesGallery = document.getElementById('favorites-gallery');

    const baseUrl = 'https://cataas.com/cat';
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    function generateCatImage() {
        const text = textInput.value.trim();
        const category = categorySelect.value;
        let url = baseUrl;

        if (category) {
            url += `/${category}`;
        }
        if (text) {
            url += `/says/${encodeURIComponent(text)}`;
        }

        const timestamp = new Date().getTime();
        catImg.src = `${url}?${timestamp}`;
    }

    function saveFavorite() {
        const currentSrc = catImg.src;
        if (!favorites.includes(currentSrc)) {
            favorites.push(currentSrc);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavoritesGallery();
        }
    }

    function updateFavoritesGallery() {
        favoritesGallery.innerHTML = '';
        favorites.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Gato favorito';
            favoritesGallery.appendChild(img);
        });
    }

    generateButton.addEventListener('click', generateCatImage);
    saveButton.addEventListener('click', saveFavorite);
    categorySelect.addEventListener('change', generateCatImage);

    updateFavoritesGallery();
});