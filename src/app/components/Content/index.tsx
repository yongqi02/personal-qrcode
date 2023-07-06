/**
 * @author nizhou-studio
 * @create 2023/7/6 22:45
 * @path src/app/components/Content
 */

import {Layout} from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 500,
  width: 928,
  color: '#fff',
  backgroundColor: '#108ee9',
};

const Index = () => {
  return (
    <>
      <Layout.Content style={contentStyle}>123</Layout.Content>
    </>
  );
};

export default Index;