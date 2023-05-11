const multer = require('multer');

const storage = multer.diskStorage(
    {
        destination:(req, file, cb)=>{
            cb(null, './uploads')
        },
        filename:(req, file, cb)=>{
            cb(null, Date.now().toString() + '_' + file.originalname)
        }
    }
);

                            // cb = callback
const fileFilter = (req, file, cb)=>{

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }

}

const upload = multer(
    {   
        storage:storage,
        limits:{     // KB   MB   total = 10MB
            fileSIze: 1024 * 1024 * 10 
        },
        fileFilter: fileFilter
    }
);

module.exports = upload;    