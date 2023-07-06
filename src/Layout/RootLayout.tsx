/**
 * @author nizhou-studio
 * @create 2023/7/6 15:50
 * @path src/Layout
 */
import React from 'react';
import {Layout} from 'antd';

const Index = (props: {
  children: React.ReactNode
}) => {
  return (
    <Layout style={{
      maxWidth: 1440
    }}>
      {props.children}
    </Layout>
  );
};

export default Index;