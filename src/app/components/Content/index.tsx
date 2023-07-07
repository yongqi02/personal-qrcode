import { Form, Select, Layout } from 'antd';
import FloatNav from '@/app/components/FloatNav';
import {Base} from '@/app/components/Form/';


const Index = () => {

  return (
    <Layout.Content style={{
      maxHeight: 600,
      overflow: 'scroll',
    }}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14, offset: 1  }}
            layout="horizontal"
            initialValues={{

            }}
            size={'middle'}
            style={{ maxWidth: 600, marginTop: 32, marginLeft: 128 }}
          >

            <Form.Item label="选择模板" name={'temp'}>
              <Select defaultValue={'base'}>
                <Select.Option value="base">基础</Select.Option>
                <Select.Option value="bubble">泡泡</Select.Option>
              </Select>
            </Form.Item>

            <Base />

          </Form>

      <FloatNav />

    </Layout.Content>
  );
};

export default Index;