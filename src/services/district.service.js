import prismaClient from '../lib/prisma-client.js';
import { asyncHandler } from '../utils/index.js';

const DistrictService = {
    getAllDistricts: asyncHandler(async () => {
        const districts = await prismaClient.district.findMany();

        return districts;
    }),
    getDistrictById: asyncHandler(async (id) => {
        const district = await prismaClient.district.findFirst({ where: { id } });

        return district;
    }),
};

export default DistrictService;
