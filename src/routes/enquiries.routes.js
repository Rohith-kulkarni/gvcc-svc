import express from "express";
import { postEnquiry } from "../controllers/users.controllers.js";
import { getAll } from "../controllers/admin.controllers.js";

const router = express.Router();

router.post("/", postEnquiry);
router.get("/",getAll);

export default router;
