import { Encoder, ErrorCorrectionLevel } from "@nuintun/qrcode";
import base64Img from "base64-img";
import { randomBytes } from "crypto";
import fs from "fs";
import path from "path";

export default class CreateQrCodeUseCase {
  constructor() {
    // do nothing
  }

  public async execute(qrCodeText: string): Promise<boolean> {
    const folderPath = path.resolve(__dirname, "..", "..", "..", "..", "tmp");
    const hash = randomBytes(10).toString("hex");
    const fileName = `${hash}-qrcode`;

    const qrcode = new Encoder();

    qrcode.setEncodingHint(true);
    qrcode.setErrorCorrectionLevel(ErrorCorrectionLevel.H);
    qrcode.write(qrCodeText);
    qrcode.make();

    const base64Image = Array.from(qrcode.toDataURL());
    base64Image.splice(11, 3, "png");
    base64Img.imgSync(
      base64Image.join(""),
      folderPath,
      Array.from(fileName)
        .slice(0, fileName.length - 4)
        .join("")
    );

    return true;
  }
}
