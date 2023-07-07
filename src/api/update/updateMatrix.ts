/**
 * @author nizhou-studio
 * @create 2023/7/7 16:45
 * @path src/api
 */


import store from '@/store/store.ts';
import {updateMatrix} from '@/store/action.ts';


export default function f(payload: object) {
  store.dispatch(updateMatrix(payload));
}