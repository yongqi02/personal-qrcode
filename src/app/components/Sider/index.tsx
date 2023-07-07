/**
 * @author nizhou-studio
 * @create 2023/7/6 22:45
 * @path src/app/components/Content
 */


import { Layout } from 'antd';
import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Image } from 'antd';
import svg from '@/assets/images/default.svg';


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

const Index = () => {

  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log(values);
  };

  return (
    <>
      <Layout.Sider style={contentStyle} width={512} theme={'light'}>
        <Image
          width={256}
          src={svg}
          style={imgStyle}
        />
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={formStyle}
          >
            <Form.Item name="site" label="网址">
              <Input placeholder={'https://www.baidu.com'} allowClear/>
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
              <Button type="primary" htmlType="submit" size={'large'}>
                下载
              </Button>
            </Form.Item>
          </Form>
      </Layout.Sider>
    </>
  );



};

export default Index;