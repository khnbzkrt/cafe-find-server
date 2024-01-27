import prismaClient from '../lib/prisma-client.js';
import { asyncHandler } from '../utils/index.js';

const ProvinceService = {
    getAllProvinces: asyncHandler(async () => {
        const provinces = await prismaClient.province.findMany();
        return provinces;
    }),
    getProvinceById: asyncHandler(async (id) => {
        const province = await prismaClient.province.findFirst({ where: { id } });

        return province;
    }),
};

export default ProvinceService;
