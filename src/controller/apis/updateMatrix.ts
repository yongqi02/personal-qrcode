/**
 * @author heyq
 * @create 2023/7/8
 * @path src/controller/apis
 * @project personal-qrcode
 * @organization nizhou-studio
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import QRCode from "@/controller/libs/qrcode.js";
import store, {updateMatrix} from "@/models/store.ts";
import Matrix from "@/controller/libs/types/Matrix.ts";

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
    typeNumber: -1,
    correctLevel: 2,
    url: "www.baidu.com",
    ...payload
  };

  const matrix: Matrix = new QRCode(options.typeNumber, options.correctLevel);

  matrix.addData(options.url);
  matrix.make();

  store.dispatch(updateMatrix(matrix));
}