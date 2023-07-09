/**
 * @author heyq
 * @create 2023/7/9
 * @path src/controller/apis
 * @project personal-qrcode
 * @organization nizhou-studio
 */
import Options from "@/controller/libs/types/Options.ts";
import store, {updateOptions} from "@/models/store.ts";


export default function f(payload: Options) {
  store.dispatch(updateOptions(payload));
}