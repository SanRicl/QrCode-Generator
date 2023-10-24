import CreateQrCodeController from "@modules/qrcodes/useCases/CreateQrCode/CreateQrCodeController";
import { Router } from "express";

export const qrCodeRoutes = Router();

const createQrCodeController = new CreateQrCodeController();

qrCodeRoutes.post("/", createQrCodeController.handle);
