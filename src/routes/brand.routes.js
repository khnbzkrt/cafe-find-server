import express from 'express';
import { BrandController } from '../controllers/index.js';

const brandRoute = express.Router();

brandRoute.get('/', BrandController.getAllBrands);
brandRoute.get('/:id', BrandController.getBrandById);
brandRoute.post('/', BrandController.createBrand);
brandRoute.put('/', BrandController.updateBrand);
brandRoute.delete('/:id', BrandController.deleteBrandById);

export default brandRoute;
