const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require ('../middleware/multer-config');
const stuffCtrl = require('../controllers/book');

router.post('/', auth, multer.single('image'), stuffCtrl.createBook);v
router.post('/:id/rating', auth, stuffCtrl.createRatingBook);
router.get('/bestrating', stuffCtrl.createBestrating);
router.get('/',stuffCtrl.getAllBooks);
router.get('/:id',stuffCtrl.getOneBook);
router.put('/:id', auth, multer.single('image'), stuffCtrl.modifyBook);
router.delete('/:id', auth, stuffCtrl.deleteBook);

module.exports = router;