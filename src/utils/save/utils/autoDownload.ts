/**
 * @author nizhou-studio
 * @create 2023/7/7 17:32
 * @path src/utils/save/utils
 */


export default function autoDownload(filename: string, href: Blob) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(href); a.download = filename; a.hidden = true;
  a.click();
}