/**
 * @author nizhou-studio
 * @create 2023/7/6 22:14
 * @path src/app/components/Header
 */

import {Col, Layout, Row, Space} from 'antd';
import React from 'react';
import {GithubFilled, QqCircleFilled, TwitterCircleFilled, WechatFilled, ZhihuCircleFilled} from "@ant-design/icons";
// const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const headerStyle: React.CSSProperties = {
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const Index = () => {
  return (
    <Layout.Header style={headerStyle}>
      <Row>
        <Col></Col>
        <Col>
          <Space size={16} wrap>
            <GithubFilled />
            <TwitterCircleFilled />
            <WechatFilled />
            <QqCircleFilled />
            <ZhihuCircleFilled />
            {/*<Avatar>U</Avatar>*/}
            {/*<Avatar size={40}>USER</Avatar>*/}
            {/*<Avatar src={url} />*/}
            {/*<Avatar src={<img src={url} alt="avatar" />} />*/}
            {/*<Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>*/}
          </Space>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Index;