import express from 'express';
import brandRoute from './brand.routes.js';

const appRouter = express.Router();

appRouter.use('/brands', brandRoute);
appRouter.use('*', (req, res) => res.status(404).json({ message: 'PAGE NOT FOUND' }));

export default appRouter;