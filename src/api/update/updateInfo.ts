/**
 * @author nizhou-studio
 * @create 2023/7/7 16:44
 * @path src/api
 */


import store from '@/store/store.ts';
import {updateInfo} from '@/store/action.ts';


export default function f(payload: {
  filename: string,
  url: string,
  format: string
}) {
  store.dispatch(updateInfo(payload));
}