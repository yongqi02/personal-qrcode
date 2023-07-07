/**
 * @author nizhou-studio
 * @create 2023/7/7 15:30
 * @path src/app/components/Content/forms
 */
import {Form, Input, Select, Slider, Upload} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

const Index = () => {
  return (
    <>
      <Form.Item label="容错率" name={'correct'}>
        <Select defaultValue={'m'}>
          <Select.Option value="l">L 可遮挡7%</Select.Option>
          <Select.Option value="m">M 可遮挡15%</Select.Option>
          <Select.Option value="q">Q 可遮挡25%</Select.Option>
          <Select.Option value="h">H 可遮挡30%</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="图标" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>拖拽/点击</div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item name="slider" label="图标缩放">
        <Slider />
      </Form.Item>

      <Form.Item label="信息点样式" name={'info'}>
        <Select defaultValue={'m'}>
          <Select.Option value="l">L 可遮挡7%</Select.Option>
          <Select.Option value="m">M 可遮挡15%</Select.Option>
          <Select.Option value="q">Q 可遮挡25%</Select.Option>
          <Select.Option value="h">H 可遮挡30%</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="scale" label="信息点缩放">
        <Slider />
      </Form.Item>

      <Form.Item name="trans" label="信息码不透明度">
        <Slider />
      </Form.Item>

      <Form.Item label="信息码颜色">
        <Input />
      </Form.Item>

      <Form.Item label="定位点样式" name={'info'}>
        <Select defaultValue={'m'}>
          <Select.Option value="l">L 可遮挡7%</Select.Option>
          <Select.Option value="m">M 可遮挡15%</Select.Option>
          <Select.Option value="q">Q 可遮挡25%</Select.Option>
          <Select.Option value="h">H 可遮挡30%</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="定位点颜色">
        <Input />
      </Form.Item>
    </>
  );
};

export default Index;