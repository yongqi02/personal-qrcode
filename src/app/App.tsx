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
import styles from "@/index.module.less";
import svg from "@/assets/images/default.svg";


const Index = () => {

  const [text, setText] = useState('');
  const [qrcode, setQrcode] = useState('https://www.baidu.com');

  useEffect(() => setQrcode(generate(text)), []);

  const handleDownload = () => {
    const el = React.createElement(base, {qrcode: qrcode})
    save("测试", ReactDOMServer.renderToString(el))
  }

  return (

  <div className={styles.container}>
    <div className={styles.header}></div>
    <div className={styles.content}>
      <div className={styles.content1}></div>
      <div className={styles.content2}>
        <div className={styles.title}>
          <h1>{'<-创建二维码->'}</h1>
        </div>
        <div className={styles.createTable}>
          <form className={styles.left}>
            <div className={styles.label}>二维码网址</div>
            <input placeholder={'请输入'}
                  onBlur={() => setQrcode(generate(text))}
                  onChange={event => setText(event.target.value)}
            />
            <div className={styles.label}>文件名</div>
            <input placeholder={'请输入'}/>
            <div className={styles.label}>文件格式</div>
            <input placeholder={'请输入'}/>
            <div>
              <button onClick={handleDownload}>下载</button>
              <button>清空</button>
            </div>
          </form>
          <div className={styles.divide}></div>
          <div className={styles.right}>
            <img src={svg} alt={'图片'}/>
          </div>
        </div>
      </div>
      <div className={styles.content3}></div>
      <div className={styles.content4}></div>
      <div className={styles.content5}></div>
    </div>
    <div className={styles.footer}></div>
  </div>
  );
}

export default Index;