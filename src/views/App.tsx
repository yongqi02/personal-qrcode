/**
 * @author heyq
 * @create 2023/7/8
 * @path src/views
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import {Button, Col, Layout, Row, Select, Space, Form, Image, Input, FloatButton} from "antd";
import {Github, Gitee, WeChat, QQ, TikTok} from "@/views/assets/icons";
import React, {useState} from "react";
import "@/views/assets/fonts/fonts.css";
import "@/views/assets/styles/common.css";
import updateMatrix from "@/controller/apis/updateMatrix";
import Render from "@/views/utils/render.tsx";
import ReactDOMServer from "react-dom/server";
import {QuestionCircleOutlined} from "@ant-design/icons";
import Base from "@/views/components/Base.tsx";
import updateOptions from "@/controller/apis/updateOptions";

const HEAD_SVG = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n " +
	"<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 20010904//EN\"" +
	" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n";

const headerStyle: React.CSSProperties = {
	height: 64,
	backgroundColor: "#d9d9d9",
	borderBottom: "2px solid #bfbfbf",
};

const contentStyle: React.CSSProperties = {
	textAlign: "center",
	minHeight: 500,
	width: 928,
	color: "#fff",
};

updateMatrix({});

const Index = () => {

	const createURL = () => {
		const content = ReactDOMServer.renderToString(React.createElement(Render));
		const htmlContent = [HEAD_SVG + content];
		const bl = new Blob(htmlContent, {type: "image/svg+xml"});
		return URL.createObjectURL(bl);
	};

	const [form] = Form.useForm();
	const [src, setSrc] = useState(createURL());

	const onValuesChange = (_: unknown, allValues: {
		url: string,
		format: string,
		filename: string
	}) => {
		const payload = {
			url: allValues.url,
			format: allValues.format
		};
		updateMatrix(payload);
		setSrc(createURL());
	};

	const onFinish = (allValues: {
		url: string,
		format: string,
		filename: string
	}) => {
		const a = document.createElement("a");
		a.href = createURL();
		a.download = allValues.filename + ".svg";
		a.hidden = true;
		a.click();
	};

	const onOptionsChange = (_: unknown, allValues: {
		temp: string,
		size: number,
		foreColor: string,
		backColor: string,
	}) => {
		updateOptions({
			size: allValues.size,
			foreColor: allValues.foreColor,
			backColor: allValues.backColor
		});
		setSrc(createURL());
	};

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
				<Layout.Content style={{
					maxHeight: 600,
					overflow: "scroll",
				}}>
					<Form
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14, offset: 1  }}
						layout="horizontal"
						initialValues={{
							temp: "base",
							size: 256,
							foreColor: "#000",
							backColor: "#fff",
						}}
						onValuesChange={onOptionsChange}
						size={"middle"}
						style={{ maxWidth: 600, marginTop: 32, marginLeft: 128 }}
					>

						<Form.Item label="选择模板" name={"temp"}>
							<Select defaultValue={"base"}>
								<Select.Option value="base">基础</Select.Option>
								<Select.Option value="bubble">泡泡</Select.Option>
							</Select>
						</Form.Item>

						<Base />

					</Form>

					<FloatButton.Group shape="circle" style={{ right: 24 }}>
						<FloatButton icon={<QuestionCircleOutlined />} />
						<FloatButton />
						<FloatButton.BackTop visibilityHeight={0} />
					</FloatButton.Group>

				</Layout.Content>
				<Layout.Sider style={contentStyle} width={512} theme={"light"}>
					<Image width={256} src={src} style={{
						marginTop: 32
					}}/>
					<Form
						form={form}
						name="control-hooks"
						onFinish={onFinish}
						onValuesChange={onValuesChange}
						style={{maxWidth: 400, marginTop: 32}}
						initialValues={{filename: "personal-qrcode", url: "www.baidu.com", format: "svg"}}
						labelCol={{span: 8}}
						wrapperCol={{span: 16}}
					>
						<Form.Item name="url" label="网址">
							<Input placeholder={"https://www.baidu.com"} allowClear />
						</Form.Item>
						<Form.Item name="filename" label="文件名">
							<Input placeholder={"special-qrcode"} allowClear/>
						</Form.Item>
						<Form.Item name="format" label="格式" rules={[{ required: true }]}>
							<Select placeholder="请选择下载的文件格式" allowClear>
								<Select.Option value="svg">SVG</Select.Option>
								<Select.Option value="png">PNG</Select.Option>
								<Select.Option value="jpg">JPG</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 2, span: 16 }}>
							<Button type="primary" htmlType="submit" size={"large"}>
								下载
							</Button>
						</Form.Item>
					</Form>
				</Layout.Sider>
			</Layout>
			<Layout.Footer></Layout.Footer>
		</Layout>
	);
};

export default Index;