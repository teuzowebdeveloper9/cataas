// server.js
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const axios = require('axios');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/create-sticker', upload.single('image'), async (req, res) => {
    const inputPath = req.file.path;
    const outputPath = path.join(__dirname, 'stickers', `${req.file.filename}.png`);

    try {
        await sharp(inputPath)
            .resize(512, 512)
            .toFile(outputPath);
        res.download(outputPath, 'sticker.png');
    } catch (error) {
        res.status(500).send('Error creating sticker');
    }
});

app.get('/download-cat-sticker', async (req, res) => {
    const catImageUrl = 'https://cataas.com/cat';
    const outputPath = path.join(__dirname, 'stickers', 'cat-sticker.png');

    try {
        const response = await axios({
            url: catImageUrl,
            responseType: 'stream',
        });

        response.data.pipe(fs.createWriteStream(outputPath))
            .on('finish', async () => {
                await sharp(outputPath)
                    .resize(512, 512)
                    .toFile(outputPath);
                res.download(outputPath, 'cat-sticker.png');
            })
            .on('error', (error) => {
                res.status(500).send('Error downloading cat image');
            });
    } catch (error) {
        res.status(500).send('Error creating sticker');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});