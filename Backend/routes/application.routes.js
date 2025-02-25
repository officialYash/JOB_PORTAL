import express from "express";
import isAuthentication from '../middlewares/isAuthentication.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
 
const router = express.Router();

router.route("/apply/:id").get(isAuthentication, applyJob);
router.route("/get").get(isAuthentication, getAppliedJobs);
router.route("/:id/applicants").get(isAuthentication, getApplicants);
router.route("/status/:id/update").post(isAuthentication, updateStatus);
 

export default router;
