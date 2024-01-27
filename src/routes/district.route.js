import express from 'express';
import { DistrictController } from '../controllers/index.js';

const districtRoute = express.Router();

districtRoute.get('/', DistrictController.getAllDistricts);
districtRoute.get('/:id', DistrictController.getDistrictById);

export default districtRoute;
