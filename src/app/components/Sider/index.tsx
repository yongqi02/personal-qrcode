/**
 * @author nizhou-studio
 * @create 2023/7/6 22:45
 * @path src/app/components/Content
 */


import React, {useState} from 'react';
import {Button, Form, Image, Input, Layout, Select} from 'antd';

import {updateImg, updateInfo} from '@/api/update';
import {makeMatrix} from '@/api/make';
import {downloadSVG} from '@/api/download';

import INFO from '@/constant/INFO.ts';
import {RENDER_TYPE} from '@/constant/TYPE.ts';
import store from '@/store/store.ts';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 500,
  width: 928,
  color: '#fff',
};

const imgStyle: React.CSSProperties = {
  marginTop: 32
};

const formStyle: React.CSSProperties = {
  maxWidth: 400,
  marginTop: 32
};

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const buttonLayout = {
  wrapperCol: { offset: 2, span: 16 },
};

makeMatrix();
updateImg();

const Index = () => {

  const [form] = Form.useForm();
  const [img, setImg] = useState(store.getState().img);

  store.subscribe(() => {
    setImg(store.getState().img);
  });

  const onFinish = (values: {
    filename: string,
    url: string,
    format: string
  }) => {
    updateInfo(values);
    makeMatrix();
    downloadSVG(RENDER_TYPE.Base);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onValuesChange = (_, allValues: {
    filename: string,
    url: string,
    format: string
  }) => {
    updateInfo(allValues);
    makeMatrix();
    updateImg();
  };


  return (
    <>
      <Layout.Sider style={contentStyle} width={512} theme={'light'}>
        <Image
          width={256}
          src={img}
          style={imgStyle}
        />
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            onValuesChange={onValuesChange}
            style={formStyle}
            initialValues={INFO}
          >
            <Form.Item name="url" label="网址">
              <Input placeholder={'https://www.baidu.com'} allowClear />
            </Form.Item>
            <Form.Item name="filename" label="文件名">
              <Input placeholder={'special-qrcode'} allowClear/>
            </Form.Item>
            <Form.Item name="format" label="格式" rules={[{ required: true }]}>
              <Select
                placeholder="请选择下载的文件格式"
                allowClear
              >
                <Option value="svg">SVG</Option>
                <Option value="png">PNG</Option>
                <Option value="jpg">JPG</Option>
              </Select>
            </Form.Item>
            <Form.Item {...buttonLayout}>
              <Button
                type="primary"
                htmlType="submit"
                size={'large'}
              >
                下载
              </Button>
            </Form.Item>
          </Form>
      </Layout.Sider>
    </>
  );



};

export default Index;