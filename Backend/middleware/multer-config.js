const multer = require('multer');
const SharpMulter = require('sharp-multer');

const storage = SharpMulter({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (originalname, options) => {
    const name = originalname.split(' ').join('_');
    return name + Date.now() + '.webp';
  },
  imageOptions: {
    fileFormat: 'webp',
    quality: 80,
    resize: { width: 250, height: 250 },
  }
});

module.exports = multer({ storage });