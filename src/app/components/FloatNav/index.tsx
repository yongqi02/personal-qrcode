/**
 * @author nizhou-studio
 * @create 2023/7/7 14:27
 * @path src/app/components/FloatNav
 */
import {FloatButton} from 'antd';
import {QuestionCircleOutlined, SyncOutlined} from '@ant-design/icons';

const Index = () => {
  return (
    <>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
      <FloatButton.Group shape="square" style={{ right: 94 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </>
  );
};

export default Index;