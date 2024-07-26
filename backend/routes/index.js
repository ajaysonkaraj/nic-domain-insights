import Router from "express";
const router = Router();

import userRoutes from "./userRoutes.js";
import DeveloperRoutes from "./DeveloperRoutes.js";
import DomainManagerRoutes from "./DomainManagerRoutes.js";
import AdminDashboardRoutes from "./AdminDashboardRoutes.js";
import EmailOTPRoutes from "./EmailOTPRoutes.js";

// * User Routes
router.use("/api/user", userRoutes);

// * Developer Routes
router.use("/api/developer", DeveloperRoutes);

//  * Domain and Manager Routes
router.use("/api/domain-manager", DomainManagerRoutes);

// * Fetching all developer for Dashboard
router.use("/api/dashboard/", AdminDashboardRoutes);

// * otp feature
router.use('/api/auth/',EmailOTPRoutes);

export default router;
