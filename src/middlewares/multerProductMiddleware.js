const path = require('path');
const multer = require('multer');

// ************ Multer config ************

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images/products");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + "image" + path.extname(file.originalname));
    }
});

const uploadFile = multer({storage});

module.exports = uploadFile;