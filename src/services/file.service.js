import FILE_TYPE from '../commons/exceptions/constants/file-type.constants.js';
import prismaClient from '../lib/prisma-client.js';
import asyncHandler from '../utils/async.handler.js';

const FileService = {
    createImageFile: asyncHandler(async (file) => {
        const newFile = await prismaClient.file.create({
            data: {
                path: file.filename,
                fileType: FILE_TYPE.IMAGE,
            },
        });

        return newFile;
    }),
};

export default FileService;
