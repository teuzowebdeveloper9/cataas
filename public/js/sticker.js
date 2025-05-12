// sticker.js
const sharp = require('sharp');
const fs = require('fs');

async function createSticker(inputImagePath, outputImagePath) {
    try {
        await sharp(inputImagePath)
            .resize(512, 512) // Redimensiona a imagem para 512x512 pixels
            .toFile(outputImagePath);
        console.log('Sticker created successfully!');
    } catch (error) {
        console.error('Error creating sticker:', error);
    }
}

document.getElementById('download-sticker-button').addEventListener('click', () => {
    window.location.href = '/download-cat-sticker';
});

createSticker('input.jpg', 'output.png');