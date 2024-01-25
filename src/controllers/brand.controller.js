import { BrandService } from '../services/index.js';
import { asyncHandler } from '../utils/index.js';

const BrandController = {
    getAllBrands: asyncHandler(async (req, res) => {
        const brands = await BrandService.getAllBrands();

        res.status(200).json({
            status: true,
            data: brands,
        });
    }),
    getBrandById: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const brand = await BrandService.getBrandById(parseInt(id));

        res.status(200).json({
            status: true,
            data: brand,
        });
    }),
    createBrand: asyncHandler(async (req, res) => {
        const brand = await BrandService.createBrand(req.body);

        res.status(201).json({
            status: true,
            data: brand,
        });
    }),
    updateBrand: asyncHandler(async (req, res) => {
        const brand = await BrandService.updateBrand(req.body);

        res.status(200).json({
            status: true,
            data: brand,
        });
    }),
    deleteBrandById: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const isSuccess = await BrandService.deleteBrandById(parseInt(id));

        res.status(200).json({
            status: isSuccess,
        });
    }),
};

export default BrandController;
