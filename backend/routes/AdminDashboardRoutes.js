import Router from "express";
import {
  fetchDeveloperAndDomainManager,
//   deleteDeveloper,
} from "../controller/AdminDashboardController.js";
const router = Router();

router.get("/:domain", fetchDeveloperAndDomainManager);
// router.delete("/",deleteDeveloper);
export default router;
