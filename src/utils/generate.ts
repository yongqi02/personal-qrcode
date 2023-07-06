/**
 * @author nizhou-studio
 * @create 2023/7/5 17:35
 * @path src/utils
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import QRCode from '@/lib/qrcode.js';

export function generate(text: string) {

  const options = {
    render		: 'canvas',
    width		: 256,
    height		: 256,
    typeNumber	: -1,
    correctLevel	: 2,
    background      : '#ffffff',
    foreground      : '#000000',
    text: text
  };

  const qrcode = new QRCode(options.typeNumber, options.correctLevel);

  qrcode.addData(options.text);
  qrcode.make();

  return qrcode;
}

