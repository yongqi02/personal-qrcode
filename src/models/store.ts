/**
 * @author heyq
 * @create 2023/7/8
 * @path src/models
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import { configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

const storeSlice = createSlice({
	name: "store",
	initialState: {
		// info: {
		// 	filename: "personal-qrcode",
		// 	url: "www.baidu.com",
		// 	format: "svg"
		// },
		matrix: {},
		// img: ""
	},
	reducers: {
		// updateInfo: (state, action: PayloadAction<{
		// 	filename: string,
		// 	url: string,
		// 	format: string
		// }>) => {
		// 	state.info = {
		// 		...state.info,
		// 		...action.payload
		// 	};
		// }
		updateMatrix: (state, action: PayloadAction<object>) => {
			console.log("已成功更新矩阵");
			state.matrix = action.payload;
		}
	}
});

const store = configureStore({
	reducer: storeSlice.reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({serializableCheck: false})
});

export const {
	updateMatrix
} = storeSlice.actions;

export default store;