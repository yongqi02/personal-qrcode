/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @author nizhou-studio
 * @create 2023/7/5 12:41
 * @path src/app
 */
import React, {useEffect, useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import {generate} from '@/utils/generate.ts';
import {save} from '@/utils/download.ts';
import base from '@/examples/base.tsx';
import styles from '@/app/index.module.less';
import svg from '@/assets/images/default.svg';

import { Button, Form, Input, Radio } from 'antd';
import type { FormInstance } from 'antd/es/form';
type LayoutType = Parameters<typeof Form>[0]['layout'];

import Header from '@/app/components/Header';

// const Header = () => {
//   return (<div className={styles.header}></div>);
// };

const Content = () => {

  const [text, setText] = useState('');
  const [qrcode, setQrcode] = useState('https://www.baidu.com');

  useEffect(() => setQrcode(generate(text)), []);

  const handleDownload = () => {
    const el = React.createElement(base, {qrcode: qrcode});
    save('测试', ReactDOMServer.renderToString(el));
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const formRef = React.useRef<FormInstance>(null);

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  return (
    <div className={styles.content2}>
      <div className={styles.title}>
        <h1>{'<-创建二维码->'}</h1>
      </div>
      <div className={styles.createTable}>
        {/*/!*<form className={styles.left}>*!/*/}
        {/*/!*  <div className={styles.label}>二维码网址</div>*!/*/}
        {/*//   <input placeholder={'请输入'}*/}
        {/*//          onBlur={() => setQrcode(generate(text))}*/}
        {/*//          onChange={event => setText(event.target.value)}*/}
        {/*/!*  />*!/*/}
        {/*//   <div className={styles.label}>文件名</div>*/}
        {/*//   <input placeholder={'请输入'}/>*/}
        {/*//   <div className={styles.label}>文件格式</div>*/}
        {/*/!*  <input placeholder={'请输入'}/>*!/*/}
        {/*/!*  <div>*!/*/}
        {/*/!*    <button onClick={handleDownload}>下载</button>*!/*/}
        {/*/!*    <button>清空</button>*!/*/}
        {/*/!*  </div>*!/*/}
        {/*/!*</form>*!/ */}
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
          style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
          ref={formRef}
          onFinish={onFinish}
        >
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item label="Form Layout" name="layout">
            <Radio.Group value={formLayout}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.divide}></div>
        <div className={styles.right}>
          <img src={svg} alt={'图片'}/>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (<div className={styles.footer}></div>);
};

const Index = () => {
  return (
  <>
    <Header />
    {/*<div className={styles.content}>*/}
    {/*  <div className={styles.content1}></div>*/}
    {/*  <Content />*/}
    {/*  <div className={styles.content3}></div>*/}
    {/*  <div className={styles.content4}></div>*/}
    {/*  <div className={styles.content5}></div>*/}
    {/*</div>*/}
    {/*<Footer />*/}
  </>
  );
};

export default Index;