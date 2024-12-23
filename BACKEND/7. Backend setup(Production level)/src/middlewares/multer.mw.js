import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname) //can do a lot, check file. and see all the methods available
    }
  })
  
  export const upload = multer({ 
    storage,
})