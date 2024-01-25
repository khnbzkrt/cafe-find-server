import prismaClient from '../lib/prisma-client.js';
import { asyncHandler } from '../utils/index.js';
import { NotFoundException } from '../commons/exceptions/index.js';
import { BRAND } from '../commons/exceptions/constants/index.js';

const BrandService = {
    getAllBrands: asyncHandler(async () => {
        return await prismaClient.brand.findMany();
    }),
    getBrandById: asyncHandler(async (id) => {
        return await prismaClient.brand.findFirst({ where: { id } });
    }),
    createBrand: asyncHandler(async (brand) => {
        const newBrand = await prismaClient.brand.create({
            data: brand,
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
