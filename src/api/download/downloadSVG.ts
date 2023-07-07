/**
 * @author nizhou-studio
 * @create 2023/7/7 17:09
 * @path src/api/download
 */
import React from 'react';
import base from '@/render/Base.tsx';
import {save} from '@/utils';
import {SAVE_TYPE} from '@/constant/TYPE.ts';
import ReactDOMServer from 'react-dom/server';
import {getInfo, getMatrix} from '@/api/get';

export default function f() {
  const matrix = getMatrix();
  save(getInfo().filename,
    ReactDOMServer.renderToString(
      React.createElement(base, {matrix})
    ), SAVE_TYPE.SVG);
}