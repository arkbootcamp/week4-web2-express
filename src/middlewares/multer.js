const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('filenya adalah11', file)
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString()+file.originalname)
    }
  })
  
upload = multer({ storage: storage })
module.exports = {
    upload
}