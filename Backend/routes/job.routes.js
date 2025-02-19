import express from 'express';
import isAuthentication from '../middlewares/isAuthentication.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/job.controller.js';

const router = express.Router();

router.route('/post').post(isAuthentication, postJob);
router.route('/get').get(isAuthentication,getAllJobs);
router.route('/getadminjobs').get(isAuthentication,getAdminJobs);
router.route('/get/:id').get(isAuthentication,getJobById);
export default router;