import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from '@/app/App'
import '@/assets/styles/default.less';
import styles from './index.module.less';
import svg from '@/assets/images/default.svg';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
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
              <input placeholder={'请输入'}/>
              <div className={styles.label}>文件名</div>
              <input placeholder={'请输入'}/>
              <div className={styles.label}>文件格式</div>
              <input placeholder={'请输入'}/>
              <div>
                <button>下载</button>
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
  </React.StrictMode>,
)
