import express from 'express';
import { ProvinceController } from '../controllers/index.js';

const provinceRoute = express.Router();

provinceRoute.get('/', ProvinceController.getAllProvinces);
provinceRoute.get('/:id', ProvinceController.getProvinceById);

export default provinceRoute;
