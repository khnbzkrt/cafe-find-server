import express from 'express';
import dotenv from 'dotenv';

import appRouter from './src/routes/index.js';
import { exceptionMiddleware } from './src/middlewares/index.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', appRouter);
app.use(exceptionMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
