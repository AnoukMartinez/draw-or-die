const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;
const uploadDirectory = path.join(__dirname, 'data/images');

app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        cb(null, `${timestamp}-${file.originalname}`);
    },
});
const upload = multer({ storage });

app.use('/images', express.static(uploadDirectory));

app.post('/users/:userId/images', upload.array('files'), (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
    }
    res.status(200).json({ message: 'Files uploaded successfully', filenames: files.map(file => file.filename) });
});

app.get('/users/:id/images', (req, res) => {

    res.send(req.params)
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
