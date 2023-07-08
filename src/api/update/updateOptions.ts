/**
 * @author heyq
 * @create 2023/7/8
 * @path src/api/update
 * @project personal-qrcode
 * @organization
 */
import store from "@/store/store.ts";
import {updateOptions} from "@/store/action.ts";


export default function f(payload: {
  render: string,
  width: number,
  height: number,
  typeNumber: number,
  correctLevel: number,
  background: string,
  foreground: string,
}) {
  store.dispatch(updateOptions(payload));
}