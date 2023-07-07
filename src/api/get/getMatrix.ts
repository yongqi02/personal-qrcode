/**
 * @author nizhou-studio
 * @create 2023/7/7 16:59
 * @path src/api/get
 */


import store from '@/store/store.ts';


export default function f() {
  return store.getState().matrix;
}