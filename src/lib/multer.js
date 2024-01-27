import multer from 'multer';
import { extname } from 'path';

class MulterUpload {
    #upload = null;
    #storage = null;
    constructor() {
        this.#storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public/uploads');
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
            },
        });
        this.#upload = multer({ storage: this.#storage });

        this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile(req, res, next) {
        const singleUpload = this.#upload.single('file');

        singleUpload(req, res, function (err) {
            if (err) {
                return res.status(400).send({ error: err.message });
            }

            next();
        });
    }
}

export default new MulterUpload();
