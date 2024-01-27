import express from 'express';
import { BrandController } from '../controllers/index.js';
import MulterUpload from '../lib/multer.js';

const brandRoute = express.Router();

brandRoute.get('/', BrandController.getAllBrands);
brandRoute.get('/:id', BrandController.getBrandById);
brandRoute.post('/', [MulterUpload.uploadFile], BrandController.createBrand);
brandRoute.put('/', BrandController.updateBrand);
brandRoute.delete('/:id', BrandController.deleteBrandById);

export default brandRoute;
