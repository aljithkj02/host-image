const { Router } = require('express');
const multer = require('multer');
const { uploadImage, getAllImages, getThumbnails } = require('../controllers/gallery.controller'); 
const authorize = require('../middlewares/authorization');

const upload = multer({ dest: './uploads/' });
const router = Router();

router.get('/', authorize, getAllImages);
router.get('/thumbnails/:id', authorize, getThumbnails);
router.post('/upload', upload.single('image'), authorize, uploadImage );


 

module.exports = router;