import { Router } from "express";
const router = Router();
import {
  createDeveloper,
  getDeveloper,
  updateDeveloper,
  deleteDeveloper,
} from "../controller/DeveloperController.js";

//  * Creating new developer record
router.post("/", createDeveloper);

router.get("/:id", getDeveloper);

router.put("/:id", updateDeveloper);

router.delete("/:id", deleteDeveloper);

export default router;
