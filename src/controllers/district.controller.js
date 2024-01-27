import { DistrictService } from '../services/index.js';
import { asyncHandler } from '../utils/index.js';

const DistrictController = {
    getAllDistricts: asyncHandler(async (req, res) => {
        const districts = await DistrictService.getAllDistricts();

        res.status(200).json({
            status: true,
            data: districts,
        });
    }),
    getDistrictById: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const district = await DistrictService.getDistrictById(parseInt(id));

        res.status(200).json({
            status: true,
            data: district,
        });
    }),
};

export default DistrictController;
