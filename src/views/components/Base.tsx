/**
 * @author heyq
 * @create 2023/7/9
 * @path src/views/components
 * @project personal-qrcode
 * @organization nizhou-studio
 */


import {Form, Input} from "antd";

const Index = () => {
  return (
    <>
      <Form.Item label="二维码尺寸" name={"size"}>
        <Input />
      </Form.Item>
      <Form.Item label="信息点颜色" name={"foreColor"}>
        <Input />
      </Form.Item>
      <Form.Item label="背景" name={"backColor"}>
        <Input />
      </Form.Item>
    </>
  );
};

export default Index;