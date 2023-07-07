/**
 * @author nizhou-studio
 * @create 2023/7/6 22:14
 * @path src/app/components/Header
 */


import {Button, Col, Layout, Row, Space} from 'antd';
import React from 'react';
import styles from './index.module.less';
import {Github, Gitee, QQ, WeChat, TikTok} from '@/assets/images/logos/index.ts';


const headerStyle: React.CSSProperties = {
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#fff',
  border: '2px solid #EEEFF1',
  marginBottom: '2'
};

const Index = () => {
  return (
    <Layout.Header style={headerStyle}>
      <Row>
        <Col span={8}>
          <h1 style={{
            fontFamily: 'alimama-agile',
            fontSize: 40
          }}
              className={styles.logo}
          >
            Personal-Qrcode
          </h1>
        </Col>
        <Col span={10}>
          <h2 style={{
            fontFamily: 'alimama-daoliti',
            fontSize: 12,
            lineHeight: '80px'
          }}>
            @nizhou-studio
          </h2>
        </Col>
        <Col span={6}>
          <Space size={'large'}>
            <Button
              type="primary"
              icon={<Github />}
              shape={'circle'}
              style={{
                padding: 0,
                backgroundColor: 'transparent'
              }}
            />
            <Button
              type="primary"
              icon={<Gitee />}
              shape={'circle'}
              style={{
                padding: 0,
                backgroundColor: 'transparent'
              }}
            />
            <Button
              type="primary"
              icon={<WeChat />}
              shape={'circle'}
              style={{
                padding: 0,
                backgroundColor: 'transparent'
              }}
            />
            <Button
              type="primary"
              icon={<QQ />}
              shape={'circle'}
              style={{
                padding: 0,
                backgroundColor: 'transparent'
              }}
            />
            <Button
              type="primary"
              icon={<TikTok />}
              shape={'circle'}
              style={{
                padding: 0,
                backgroundColor: 'transparent'
              }}
            />
          </Space>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Index;