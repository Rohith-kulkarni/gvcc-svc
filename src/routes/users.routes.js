import express from "express";
import { getAll, getById } from "../controllers/users.controllers.js";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", getById);

export default router;
