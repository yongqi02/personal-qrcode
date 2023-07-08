/**
 * @author heyq
 * @create 2023/7/8
 * @path src/views
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import {Button, Col, Layout, Row, Space} from "antd";
import {Github, Gitee, WeChat, QQ, TikTok} from "@/views/assets/icons";
import React from "react";
import "@/views/assets/fonts/fonts.css";
import "@/views/assets/styles/common.css";

const headerStyle: React.CSSProperties = {
	height: 64,
	backgroundColor: "#fff"
};

const Index = () => {
	return (
		<Layout>
			<Layout.Header style={headerStyle}>
					<Row>
						<Col span={7}>
							<h1 style={{fontFamily: "alimama-agile", fontSize: 40}} className={"cp"}>
								Personal-Qrcode
							</h1>
						</Col>
						<Col span={11}>
							<h2 style={{fontFamily: "alimama-daoliti", fontSize: 12, lineHeight: "64px"}}>
								@nizhou-studio
							</h2>
						</Col>
						<Col span={6}>
							<Space size={"large"} align={"center"} className={"test"}>
								<Button icon={<Github />} shape={"circle"} className={"bc-t p-0 mt-15"} type="text"/>
								<Button icon={<Gitee />} shape={"default"} className={"bc-t p-0 mt-15"} type="text"/>
								<Button icon={<WeChat />} shape={"circle"} className={"bc-t p-0 mt-15"} type="text"/>
								<Button icon={<QQ />} shape={"circle"} className={"bc-t p-0 mt-15"} type="text"/>
								<Button icon={<TikTok />} shape={"default"} className={"bc-t p-0 mt-15"} type="text"/>
							</Space>
						</Col>
					</Row>
			</Layout.Header>
			<Layout hasSider>
				<Layout.Content></Layout.Content>
				<Layout.Sider></Layout.Sider>
			</Layout>
			<Layout.Footer></Layout.Footer>
		</Layout>
	);
};

export default Index;