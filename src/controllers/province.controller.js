import { ProvinceService } from '../services/index.js';
import { asyncHandler } from '../utils/index.js';

const ProvinceController = {
    getAllProvinces: asyncHandler(async (req, res) => {
        const provinces = await ProvinceService.getAllProvinces();

        res.status(200).json({
            status: true,
            data: provinces,
        });
    }),
    getProvinceById: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const province = await ProvinceService.getProvinceById(parseInt(id));

        res.status(200).json({
            status: true,
            data: province,
        });
    }),
};

export default ProvinceController;
