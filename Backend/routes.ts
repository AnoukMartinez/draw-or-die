var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
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
const uploadDirectory = path.join(__dirname, 'data/images');
const userData = require('./data/users.json');

// Users

router.get('/users', function(req, res) {
    res.status(200).json(userData);
});

router.get('/users/:userId', function(req, res) {
    userData.forEach((user) => {
        if(user.id ==  req.params.userId) {
            res.status(200).json({id: user.id, name: user.name, images: user.images})
        }
    })
    res.status(404).json('Could not find that user')
});

// Images

router.get('/images', async (req, res) => {
    try {
        fs.promises.readdir(uploadDirectory).then(filenames => {
            res.status(200).json(filenames);
        })
    } catch {
        res.status(500)
    }
})

router.post('/users/:userId/images', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json('No file selected');
    }
    res.status(200).json(`Uploaded: ${file.filename}`);
});

router.get('/users/:userId/images', (req, res) => {
    userData.forEach((user) => {
        if(user.id ==  req.params.userId) {
            res.status(200).json(user.images)
        }
    })
    res.status(404).json('Could not find that user')
})

module.exports = router;