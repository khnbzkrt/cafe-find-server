import { BRAND } from '../commons/exceptions/constants/index.js';
import { NotFoundException } from '../commons/exceptions/index.js';
import prismaClient from '../lib/prisma-client.js';
import { asyncHandler } from '../utils/index.js';
import { FileService } from './index.js';

const BrandService = {
    getAllBrands: asyncHandler(async () => {
        return await prismaClient.brand.findMany({
            include: {
                file: true,
            },
        });
    }),
    getBrandById: asyncHandler(async (id) => {
        return await prismaClient.brand.findFirst({ where: { id } });
    }),
    createBrand: asyncHandler(async (req) => {
        if (req.file) {
            const brandFile = await FileService.createImageFile(req.file);

            req.body.fileId = brandFile.id;
        }

        const newBrand = await prismaClient.brand.create({
            data: req.body,
        });

        return newBrand;
    }),
    updateBrand: asyncHandler(async (brand) => {
        const currentBrand = await prismaClient.brand.findFirst({
            where: { id: parseInt(brand.id) },
        });

        if (!currentBrand) {
            throw new NotFoundException(BRAND.NOT_FOUND);
        }

        const updatedBrand = await prismaClient.brand.update({
            where: {
                id: parseInt(brand.id),
            },
            data: brand,
        });

        return updatedBrand;
    }),
    deleteBrandById: asyncHandler(async (id) => {
        const currentBrand = await prismaClient.brand.findFirst({
            where: { id: parseInt(id) },
        });

        if (!currentBrand) {
            throw new NotFoundException(BRAND.NOT_FOUND);
        }

        await prismaClient.brand.delete({ where: { id } });

        return true;
    }),
};

export default BrandService;
