const { Router } = require('express');
const multer = require('multer');
const { uploadImage } = require('../controllers/gallery.controller'); 

const upload = multer({ dest: './uploads/' });
const router = Router();

router.post('/upload', upload.single('image'), uploadImage )  


module.exports = router;