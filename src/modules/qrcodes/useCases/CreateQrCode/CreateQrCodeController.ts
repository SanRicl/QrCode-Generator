import { AppError } from "errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateQrCodeUseCase from "./CreateQrCodeUseCase";

export default class CreateQrCodeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      qrcodetext,
    }: {
      qrcodetext: string;
    } = request.body;

    if (typeof qrcodetext !== "string") {
      throw new AppError("Invalid Format");
    }

    const createQrCodeUseCase = container.resolve(CreateQrCodeUseCase);

    await createQrCodeUseCase.execute(qrcodetext);

    return response.status(201).send();
  }
}
