/**
 * @author nizhou-studio
 * @create 2023/7/7 17:09
 * @path src/api/download
 */
import React from 'react';
import render from '@/render';
import {save} from '@/utils';
import {SAVE_TYPE, RENDER_TYPE} from '@/constant/TYPE.ts';
import ReactDOMServer from 'react-dom/server';
import {getInfo, getMatrix} from '@/api/get';

export default function f(type: RENDER_TYPE) {
  const matrix = getMatrix();
  save(getInfo().filename,
    ReactDOMServer.renderToString(
      React.createElement(render, {type, matrix})
    ), SAVE_TYPE.SVG);
}