/**
 * @author nizhou-studio
 * @create 2023/7/5 17:28
 * @path src/utils
 */

import {SVG_Head} from "@/constant/SVG.ts";

/**
 * 自动下载文件
 * @param filename 文件名
 * @param href 文件地址
 */
function autoDownload(filename: string, href: Blob) {
  const a: HTMLAnchorElement = document.createElement("a");
  a.href = URL.createObjectURL(href); a.download = filename; a.hidden = true;
  a.click();
}

/**
 * 将`html`保存为`svg`
 * @param filename 文件名
 * @param content HTML内容
 */
export function save(filename: string, content: string) {
  const htmlContent = [SVG_Head + content];
  const bl = new Blob(htmlContent, {type: "image/svg+xml"});
  filename = "二维码——" + filename + ".svg";
  autoDownload(filename, bl);
}