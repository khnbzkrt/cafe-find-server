import express from 'express';
import SYSTEM from '../commons/exceptions/constants/system.constant.js';
import brandRoute from './brand.routes.js';
import districtRoute from './district.route.js';
import provinceRoute from './province.route.js';

const appRouter = express.Router();

appRouter.use('/brands', brandRoute);
appRouter.use('/provinces', provinceRoute);
appRouter.use('/districts', districtRoute);
appRouter.use('*', (req, res) => res.status(404).json({ message: SYSTEM.PAGE_NOT_FOUND }));

export default appRouter;
