import express from 'express';
import {register , login , updateProfile, logout} from '../controllers/user.controller.js';
import isAuthentication from '../middlewares/isAuthentication.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout)
router.route('/profile/update').post(isAuthentication,updateProfile);

export default router;