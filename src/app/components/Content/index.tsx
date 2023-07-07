/**
 * @author nizhou-studio
 * @create 2023/7/6 22:45
 * @path src/app/components/Content
 */

import {Col, Layout} from 'antd';
import React from 'react';
// import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Select } from 'antd';
import { Image } from 'antd';
import svg from '@/assets/images/default.svg';

// type RequiredMark = boolean | 'optional';
//
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 500,
  width: 928,
  color: '#fff',
  // backgroundColor: '#108ee9',
};
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Index = () => {
  // const [form] = Form.useForm();
  // const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
  //
  // const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };
  //
  //
  // const onReset = () => {
  //   form.resetFields();
  // };
  // return (
  //   <>
  //     <Layout.Content style={contentStyle}>
  //       <Row>
  //         <Col>
  //           <Form
  //             form={form}
  //             layout="vertical"
  //             initialValues={{ requiredMarkValue: requiredMark }}
  //             onValuesChange={onRequiredTypeChange}
  //             requiredMark={requiredMark}
  //           >
  //             <Form.Item label="Required Mark" name="requiredMarkValue">
  //               <Radio.Group>
  //                 <Radio.Button value="optional">Optional</Radio.Button>
  //                 <Radio.Button value>Required</Radio.Button>
  //                 <Radio.Button value={false}>Hidden</Radio.Button>
  //               </Radio.Group>
  //             </Form.Item>
  //             <Form.Item label="Field A" required tooltip="This is a required field">
  //               <Input placeholder="input placeholder" />
  //             </Form.Item>
  //             <Form.Item
  //               label="Field B"
  //               tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
  //             >
  //               <Input placeholder="input placeholder" />
  //             </Form.Item>
  //             <Form.Item>
  //               <Button type="primary">Submit</Button>
  //             </Form.Item>
  //             <Form.Item {...tailLayout}>
  //               <Button type="primary" htmlType="submit">
  //                 Submit
  //               </Button>
  //               <Button htmlType="button" onClick={onReset}>
  //                 Reset
  //               </Button>
  //             </Form.Item>
  //           </Form>
  //         </Col>
  //         <Col>
  //           <Image
  //             width={200}
  //             src={svg}
  //           />
  //         </Col>
  //       </Row>
  //     </Layout.Content>
  //   </>
  // );


  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  return (
    <>
      <Layout.Content style={contentStyle}>
        <Col>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
          >
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
              {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                  <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item label="Required Mark" name="requiredMarkValue">
              <Radio.Group>
                <Radio.Button value="optional">Optional</Radio.Button>
                <Radio.Button value>Required</Radio.Button>
                <Radio.Button value={false}>Hidden</Radio.Button>
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
        </Col>
        <Col>
          <Image
            width={200}
            src={svg}
          />
        </Col>
      </Layout.Content>
    </>
  );



};

export default Index;