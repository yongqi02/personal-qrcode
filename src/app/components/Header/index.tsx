/**
 * @author nizhou-studio
 * @create 2023/7/6 22:14
 * @path src/app/components/Header
 */

import {Layout} from 'antd';
import React from 'react';

const headerStyle: React.CSSProperties = {
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#000',
};

const Index = () => {
  return (
    <Layout.Header style={headerStyle}>123</Layout.Header>
  );
};

export default Index;