import { Router } from "express";

import { qrCodeRoutes } from "./qrcode.routes";

export const router = Router();

router.use("/qrcode", qrCodeRoutes);
