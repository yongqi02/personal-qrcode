/**
 * @author nizhou-studio
 * @create 2023/7/6 23:18
 * @path src/app/components/Sider
 */

import {Layout} from 'antd';
import { Tabs } from 'antd';
import React from 'react';

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 500,
  width: 512,
  color: '#fff',
  backgroundColor: 'red',
};

const tabs = ['基本', '效果', '颜色', 'Logo', '背景']

const Index = () => {
  return (
    <Layout.Sider style={siderStyle} width={400}>
      <Tabs
        tabPosition={'left'}
        items={tabs.map((item, i) => {
          const id = String(i + 1);
          return {
            label: <>
              <span>{item}</span>
            </>,
            key: id,
            children: <>
              <div>{item}</div>
            </>
          };
        })}
      />
    </Layout.Sider>
  );
};

export default Index;