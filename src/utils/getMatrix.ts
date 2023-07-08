/*
 * @Author: nizhou-studio
 * @Date: 2023-07-07 23:46:00
 * @LastEditTime: 2023-07-08 10:29:50
 * @LastEditors: heyq
 * @Description: 生成二维码像素矩阵
 * @FilePath: \personal-qrcode\src\utils\generate.ts
 * Copyright © 2018 HYQ. All rights reserved.
 */


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import QRCode from '@/lib/qrcode.js';

export function getMatrix(url: string) {

  const options = {
    render		: 'canvas',
    width		: 256,
    height		: 256,
    typeNumber	: -1,
    correctLevel	: 2,
    background      : '#ffffff',
    foreground      : '#000000',
    url: url
  };

  const matrix = new QRCode(options.typeNumber, options.correctLevel);

  matrix.addData(options.url);
  matrix.make();

  return matrix;
}

