/**
 * @author nizhou-studio
 * @create 2023/7/7 17:30
 * @path src/utils/save
 */


import autoDownload from '@/utils/save/utils/autoDownload.ts';
import {HEAD_SVG} from '@/constant/HEAD.ts';


export default function f(filename: string, content: string) {
  const htmlContent = [HEAD_SVG + content];
  const bl = new Blob(htmlContent, {type: 'image/svg+xml'});
  filename = filename + '.svg';
  autoDownload(filename, bl);
}