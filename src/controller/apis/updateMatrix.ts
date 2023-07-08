/**
 * @author heyq
 * @create 2023/7/8
 * @path src/controller/apis
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import QRCode from "@/controller/libs/qrcode.js";
import store, {updateMatrix} from "@/models/store.ts";

interface Options {
  render?: string,
  width?: number,
  height?: number,
  typeNumber?: number,
  correctLevel?: number,
  backColor?: string,
  foreColor?: string,
  url?: string,
}

export default function f(payload: Options) {

  const options: Options = {
    render: "canvas",
    width: 256,
    height: 256,
    typeNumber: -1,
    correctLevel: 2,
    backColor: "#ffffff",
    foreColor: "#000000",
    url: "www.baidu.com",
    ...payload
  };

  const matrix: object = new QRCode(options.typeNumber, options.correctLevel);

  matrix.addData(options.url);
  matrix.make();

  store.dispatch(updateMatrix(matrix));
}