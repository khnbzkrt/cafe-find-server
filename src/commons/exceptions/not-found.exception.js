import httpStatus from 'http-status';

class NotFoundException extends Error {
    constructor(message) {
        super(message);

        this.message = message;
        this.statusCode = httpStatus.NOT_FOUND;
    }
}

export default NotFoundException;
