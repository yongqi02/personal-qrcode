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
			if (matrix.isDark(row, col))
				pointList.push(<use key={id++} fill="green" x={row} y={col} href="#simpleRect"/>);
		}
	}
	return pointList;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function calViewBox(matrix: Matrix) {
	if (!matrix) return "0 0 0 0";

	const nCount = matrix.getModuleCount();
	return "0 0 " + String(nCount) + " " + String(nCount);
}

const Index = () => {

	const [matrix, setMatrix] = useState<Matrix>(getMatrix());
	const [options] = useState<Options>(getOptions());

	store.subscribe(() => {
		setMatrix(getMatrix());
	});

	return (
		<svg
			className="Qr-item-svg"
			width={options.size}
			height={options.size}
			viewBox={calViewBox(matrix)}
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink">
				<rect fill={options.foreColor} width={1} height={1} id="simpleRect"/>
				{/*<circle fill="green" r={0.5} id="simpleCircle"/>*/}
				{listPoint(matrix)}
		</svg>
	);
};

export default Index;