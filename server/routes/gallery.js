const { Router } = require('express');
const multer = require('multer');
const { uploadImage, getAllImages } = require('../controllers/gallery.controller'); 
const authorize = require('../middlewares/authorization');

const upload = multer({ dest: './uploads/' });
const router = Router();

router.get('/', authorize, getAllImages);
router.post('/upload', upload.single('image'), authorize, uploadImage )  
 

module.exports = router;