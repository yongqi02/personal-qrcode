/**
 * @author nizhou-studio
 * @create 2023/7/7 17:04
 * @path src/api/make
 */


import {getMatrix} from '@/utils/generate.ts';
import {updateMatrix} from '@/api/update';
import {getInfo} from '@/api/get';


export default function f() {
  const matrix = getMatrix(getInfo().url);
  updateMatrix(matrix);
}

