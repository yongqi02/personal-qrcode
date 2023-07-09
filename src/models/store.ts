/**
 * @author heyq
 * @create 2023/7/8
 * @path src/models
 * @project personal-qrcode
 * @organization nizhou-studio
 */

import { configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Matrix from "@/controller/libs/types/Matrix.ts";
import Options from "@/controller/libs/types/Options.ts";

const storeSlice = createSlice({
	name: "store",
	initialState: {
		matrix: {},
		options: {
			size: 256,
			foreColor: "#000",
			backColor: "#fff",
		}
	},
	reducers: {
		updateMatrix: (state, action: PayloadAction<Matrix>) => {
			console.log("已成功更新矩阵");
			state.matrix = action.payload;
		},
		updateOptions: (state, action: PayloadAction<Options>) => {
			console.log("已成功更新图像");
			state.options = {
				...state.options,
				...action.payload
			};
		}
	}
});

const store = configureStore({
	reducer: storeSlice.reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({serializableCheck: false})
});

export const {
	updateMatrix,
	updateOptions
} = storeSlice.actions;

export default store;