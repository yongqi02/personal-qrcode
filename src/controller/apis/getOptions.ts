/**
 * @author heyq
 * @create 2023/7/9
 * @path src/controller/apis
 * @project personal-qrcode
 * @organization nizhou-studio
 */
import store from "@/models/store.ts";
import Options from "@/controller/libs/types/Options";


export default function f() {
  return store.getState().options as Options;
}