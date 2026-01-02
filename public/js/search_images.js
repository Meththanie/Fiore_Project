const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const imagesGrid = document.getElementById('images-grid');
const loadingSpinner = document.getElementById('loading-spinner');

// Modal elements
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('close')[0];

let currentQuery = '';
let currentPage = 1;
let isLoading = false;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    currentQuery = searchInput.value.trim();
    currentPage = 1;
    imagesGrid.innerHTML = '';
    await searchImages();
});

window.addEventListener('scroll', async () => {
    if (isLoading || currentQuery === '') return;

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        currentPage++;
        await searchImages();
    }
});

async function searchImages() {
    if (currentQuery === '') return;

    isLoading = true;
    loadingSpinner.style.display = 'block';

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${currentQuery}&page=${currentPage}&per_page=12&client_id=JCdEcABEcyyA-3QLrwuQLizRTXebrjTKwY7_kSH2G6E`);
        const data = await response.json();
        const images = data.results;

        if (images.length > 0) {
            images.forEach(image => {
                const div = document.createElement('div');
                div.classList.add('image-item');

                // Create spinner inside each image div
                const spinner = document.createElement('div');
                spinner.classList.add('spinner');
                div.appendChild(spinner);

                // Create actual image
                const img = document.createElement('img');
                img.src = image.urls.small;
                img.alt = image.alt_description || 'Unsplash Image';

                // When image fully loads, remove the spinner
                img.onload = () => {
                    spinner.remove();
                };

                div.appendChild(img);
                imagesGrid.appendChild(div);

                // Fade-in effect
                setTimeout(() => {
                    div.classList.add('visible');
                }, 100);
            });

        } else {
            if (currentPage === 1) {
                imagesGrid.innerHTML = '<p>No images found. Try a different search.</p>';
            }
        }

    } catch (error) {
        console.error('Error fetching images:', error);
        if (currentPage === 1) {
            imagesGrid.innerHTML = '<p>Failed to fetch images. Please try again later.</p>';
        }
    } finally {
        isLoading = false;
        loadingSpinner.style.display = 'none';
    }
}

// Modal Logic
imagesGrid.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        modal.style.display = 'block';
        modalImg.src = event.target.src.replace('&w=400', '&w=1080'); // Open larger image if possible
    }
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
