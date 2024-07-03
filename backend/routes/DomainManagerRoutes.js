import Router from "express";
import { createDomain } from "../controller/DomainManagerController.js";

const router = Router();

router.post("/",createDomain);

export default router;
