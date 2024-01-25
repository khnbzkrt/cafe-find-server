import { NotFoundException } from '../commons/exceptions/index.js';
import httpStatus from 'http-status';
import { SYSTEM } from '../commons/exceptions/constants/index.js';

const exceptionMiddleware = async (err, req, res, next) => {
    console.log('--------------------------------------');
    console.log('Error', err);
    console.log('--------------------------------------');

    if (err instanceof NotFoundException) {
        res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: err.message,
        });
    } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: false,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: SYSTEM.INTERNAL_SERVER_ERROR,
        });
    }
};

export default exceptionMiddleware;
