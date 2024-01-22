import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  // Filtrando que o aqruivo recevido seja uma imagen
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('File must be png or jpeg'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    // cb = callback
    destination: (req, file, cb) => {
      // caminho onde vai salvar o arquivo
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    // define novo nome pro arquivo
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${random()}${extname(file.originalname)}`);
    },
  }),
};
