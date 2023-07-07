/**
 * @author nizhou-studio
 * @create 2023/7/7 22:52
 * @path src/api/make
 */
import React from 'react';
import render from '@/render';
import {RENDER_TYPE} from '@/constant/TYPE.ts';
import {getMatrix} from '@/api/get';
import {HEAD_SVG} from '@/constant/HEAD.ts';
import ReactDOMServer from 'react-dom/server';


export default function f(type: RENDER_TYPE) {
  const matrix = getMatrix();
  const content = ReactDOMServer.renderToString(
    React.createElement(render, {type, matrix})
  );
  const htmlContent = [HEAD_SVG + content];
  const bl = new Blob(htmlContent, {type: 'image/svg+xml'});
  return URL.createObjectURL(bl);
}