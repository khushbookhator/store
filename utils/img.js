const multer = require ('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const destinationPath = path.join(__dirname, "../../frontend/client/src/all");
        callback(null, destinationPath);
    },
    filename: function(req, file, callback){
        callback(null, file.fieldname + "_" +  file.originalname + Date.now() + path.extname(file.originalname));
    }
})

const fileFilter = function(req, file, callback) {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        callback(null, true)
    }else {
        callback(null, false)
    }
}

const upload = multer({
    storage : storage,
    fileFilter: fileFilter
})

module.exports = upload