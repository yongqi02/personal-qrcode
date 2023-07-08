/**
 * @author heyq
 * @create 2023/7/8
 * @path src/controller/apis
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import store from "@/models/store.ts";

export default function f() {
  return store.getState().matrix;
}