/**
 * @author nizhou-studio
 * @create 2023/7/6 22:33
 * @path src/app
 */

import Header from '@/app/components/Header';
import Content from '@/app/components/Content';
import Footer from '@/app/components/Footer';
import Sider from '@/app/components/Sider';
import {Layout} from 'antd';

const Index = () => {
  return (
    <>
      <Header />
      <Layout hasSider>
        <Content />
        <Sider />
      </Layout>
      <Footer />
    </>
  );
};

export default Index;