import { Router } from "express";
import * as iechoRoutes from "./iechoRoutes";
const router = Router();

router.use('/', iechoRoutes);

export default router;