import axios from "axios";
import { Buffer } from "buffer";

interface IConvertImageToBase64Props {
  imgUrl: string;
}


export default async function convertImageToBase64({ imgUrl }: IConvertImageToBase64Props){
  const response = await axios.get(imgUrl, { responseType: "arraybuffer" });
  console.debug(response)
  const buffer = Buffer.from(response.data, 'binary').toString('base64');

  return buffer;
}