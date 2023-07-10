/**
 * @author heyq
 * @create 2023/7/8
 * @path src/controller/utils
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import {useState} from "react";
import store from "@/models/store.ts";
import getMatrix from "@/controller/apis/getMatrix";
import getOptions from "@/controller/apis/getOptions";
import Matrix from "@/controller/libs/types/Matrix.ts";
import Options from "@/controller/libs/types/Options.ts";

function listPoint(matrix: Matrix): Array<JSX.Element> {
	if (!matrix) return [];

	const nCount = matrix.getModuleCount();
	const pointList: Array<JSX.Element> = new Array<JSX.Element>(nCount);
	let id = 0;
	for (let row = 0; row < nCount; row++) {
		for (let col = 0; col < nCount; col++) {
			if (matrix.isDark(row, col)) {
				pointList.push(<use key={id++} fill={"black"} x={row} y={col} href="#fore"/>);
			} else {
				pointList.push(<use key={id++} fill={"black"} x={row} y={col} href="#back"/>);
			}
		}
	}
	return pointList;
}

const Index = () => {

	const [matrix, setMatrix] = useState<Matrix>(getMatrix());
	const [options, setOptions] = useState<Options>(getOptions());

	const count = matrix.getModuleCount();

	store.subscribe(() => {
		setMatrix(getMatrix());
		console.log("二维码更新成功");
		setOptions(getOptions());
	});

	return (
		// <svg
		// 	style={style}
		// 	className={"base"}
		// 	width={options.size}
		// 	height={options.size}
		// 	viewBox={calViewBox(matrix)}
		// 	xmlns="http://www.w3.org/2000/svg">
		// 		<rect fill={"blue"} width={options.size} height={options.size} id={"bgi"}></rect>
		// 		<rect fill={options.foreColor} width={1} height={1} id="fore"/>
		// 		<rect fill={options.backColor} width={1} height={1} id="back"/>
		// 		{listPoint(matrix)}
		// 		<use href="#bgi" x="0" y={"0"} width={options.size} height={options.size} fill={"red"} />
		// 		<circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
		// 		<use href="#myCircle" x="10" fill="blue" />
		// 	<image href="https://pic.imgdb.cn/item/64ab53ec1ddac507cca53887.jpg" height="200" width="200" />
		// </svg>
		<svg width={options.size} height={options.size} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${count} ${count}`}>
			{/*<image href="http://localhost:5173/bgi.jpg" width={count} height={count} />*/}
			<image href={"http://localhost:5173/bgi.jpg"} width={count} height={count} />
			<rect fill={options.foreColor} width={1} height={1} id="fore"/>
			{/*<rect fill={options.backColor} width={1} height={1} id="back"/>*/}
			{listPoint(matrix)}
		</svg>
	);
};

export default Index;