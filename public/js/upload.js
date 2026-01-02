// public/js/upload_image.js

const similarImagesGrid = document.getElementById('similar-images-grid');

async function fetchSimilarImages(keywords) {
    if (!keywords || keywords.length === 0) return;

    const searchTerm = keywords[0]; // Use the top keyword

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=6&client_id=JCdEcABEcyyA-3QLrwuQLizRTXebrjTKwY7_kSH2G6E`);
        const data = await response.json();
        const images = data.results;

        similarImagesGrid.innerHTML = ''; // Clear previous images

        if (images.length > 0) {
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = image.urls.small;
                img.alt = image.alt_description || 'Similar Image';
                img.style.width = '150px';
                img.style.height = 'auto';
                img.style.borderRadius = '10px';
                img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                img.style.margin = '10px';

                similarImagesGrid.appendChild(img);
            });
        } else {
            similarImagesGrid.innerHTML = '<p>No similar images found.</p>';
        }

    } catch (error) {
        console.error('Error fetching similar images:', error);
        similarImagesGrid.innerHTML = '<p>Failed to load similar images.</p>';
    }
}

function analyzeAndFetchSimilarImages(descriptionText) {
    const labels = extractLabelsFromDescription(descriptionText);
    fetchSimilarImages(labels);
}

function extractLabelsFromDescription(description) {
    if (!description) return [];

    // Example: "overskirt (49.02%), hoopskirt (31.29%), gown (10.22%)"
    const labels = description.match(/[a-zA-Z\s]+(?=\s*\()/g);
    if (labels) {
        return labels.map(label => label.trim().toLowerCase());
    }
    return [];
}
