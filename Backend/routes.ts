var express = require('express');
var router = express.Router();
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
            res.status(200).json({id: user.id, name: user.name})
        }
    })
    res.status(404).json('Could not find that user')
});

// Images

router.post('/users/:userId/images', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json('No file selected');
    }
    res.status(200).json(`Uploaded: ${file.filename}`);
});

router.get('/users/:id/images', (req, res) => {
    // TODO
    res.send(req.params)
})

module.exports = router;