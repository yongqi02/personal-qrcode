/**
 * @author heyq
 * @create 2023/7/8
 * @path src/api/get
 * @project personal-qrcode
 * @organization
 */
import store from '@/store/store.ts';


export default function f() {
  return store.getState().options;
}