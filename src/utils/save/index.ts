/**
 * @author nizhou-studio
 * @create 2023/7/7 17:35
 * @path src/utils/save
 */


import saveSVG from '@/utils/save/saveSVG.ts';
import {SAVE_TYPE} from '@/constant/TYPE.ts';


export default function save(filename: string, content: string, type: SAVE_TYPE) {
  switch (type) {
    case SAVE_TYPE.SVG:
      saveSVG(filename, content);
      break;
    default:
      throw new Error('文件格式错误');
  }
}