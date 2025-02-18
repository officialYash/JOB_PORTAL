import express from 'express';
import isAuthentication from '../middlewares/isAuthentication.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js';

const router = express.Router();

router.route('/register').post(isAuthentication,registerCompany);
router.route('/get').get(isAuthentication,getCompany);
router.route('/get/:id').get(isAuthentication,getCompanyById);
router.route('/update/:id').put(isAuthentication,updateCompany);

export default router;