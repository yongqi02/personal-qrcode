/**
 * @author heyq
 * @create 2023/7/8
 * @path src/controller/utils
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import React, {useState} from "react";
import store from "@/models/store.ts";
import getMatrix from "@/controller/apis/getMatrix";

function listPoint(matrix) {
	if (!matrix) return [];

	const nCount = matrix.getModuleCount();
	const pointList = new Array(nCount);
	let id = 0;
	for (let row = 0; row < nCount; row++) {
		for (let col = 0; col < nCount; col++) {
			if (matrix.isDark(row, col))
				pointList.push(<use key={id++} fill="green" x={row} y={col} href="#simpleRect"/>);
		}
	}
	return pointList;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function calViewBox(matrix) {
	if (!matrix) return "0 0 0 0";

	const nCount = matrix.getModuleCount();
	return "0 0 " + String(nCount) + " " + String(nCount);
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const Base = (props: {matrix}) => {
// 	return (
// 		<svg className="Qr-item-svg" width="100%" height="100%" viewBox={calViewBox(props.matrix)} fill="white"
// 				 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
// 			<rect fill="green" width={1} height={1} id="simpleRect"/>
// 			{/*<circle fill="green" r={0.5} id="simpleCircle"/>*/}
// 			{listPoint(props.matrix)}
// 		</svg>
// 	);
// };

const Index = () => {

	const [matrix, setMatrix] = useState(getMatrix());

	store.subscribe(() => {
		setMatrix(getMatrix());
	});

	return (
		<svg
			className="Qr-item-svg"
			width="100%"
			height="100%"
			viewBox={calViewBox(matrix)}
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink">
				<rect fill="green" width={1} height={1} id="simpleRect"/>
				{/*<circle fill="green" r={0.5} id="simpleCircle"/>*/}
				{listPoint(matrix)}
		</svg>
	);
};

export default Index;