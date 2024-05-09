const multer = require ('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        const destinationPath = path.join(__dirname, "../uploads");
        console.log("Destination Path:", destinationPath);
        callback(null, destinationPath);
    },
    filename: function(req, file, callback){
        const fileName = file.originalname;
        console.log("File Name:", fileName);
        callback(null, fileName);
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