/* eslint-disable react-hooks/exhaustive-deps,@typescript-eslint/ban-ts-comment */
/**
 * @author nizhou-studio
 * @create 2023/7/5 12:41
 * @path src/app
 */
import React, {useEffect, useState} from "react";
import ReactDOMServer from 'react-dom/server'
import {generate} from "@/utils/generate.ts";
import {save} from "@/utils/download.ts";
import base from "@/examples/base.tsx";

const Index = () => {

  const [text, setText] = useState('');
  const [qrcode, setQrcode] = useState('https://www.baidu.com');

  useEffect(() => setQrcode(generate(text)), []);

  const handleDownload = () => {
    const el = React.createElement(base, {qrcode: qrcode})
    save("测试", ReactDOMServer.renderToString(el))
  }

  return (
    <div>
      <input
        onBlur={() => setQrcode(generate(text))}
        onChange={event => setText(event.target.value)}
      />
      <button
        onClick={handleDownload}
      >下载</button>
    </div>
  );
}

export default Index;