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

    }}>
      {props.children}
    </Layout>
  );
};

export default Index;