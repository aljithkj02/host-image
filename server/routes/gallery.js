const { Router } = require('express');
const multer = require('multer');
const { uploadImage } = require('../controllers/gallery.controller'); 
const authorize = require('../middlewares/authorization');

const upload = multer({ dest: './uploads/' });
const router = Router();

router.post('/upload', upload.single('image'), authorize, uploadImage )  


module.exports = router;