/**
 * @author heyq
 * @create 2023/7/8
 * @path src/controller/apis
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import store from "@/models/store.ts";
import Matrix from "@/controller/libs/types/Matrix.ts";

export default function f(): Matrix {
  return store.getState().matrix as Matrix;
}