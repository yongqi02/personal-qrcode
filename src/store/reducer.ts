/**
 * @author nizhou-studio
 * @create 2023/7/6 17:24
 * @path src/store
 */


import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    info: {
      filename: 'personal-qrcode',
      url: 'www.baidu.com',
      format: 'svg'
    },
    matrix: []
  },
  reducers: {
    updateInfo: (state, action: PayloadAction<{
      filename: string,
      url: string,
      format: string
    }>) => {
      state.info = {
        ...state.info,
        ...action.payload
      };
    },
    updateMatrix: (state, action: PayloadAction<any>) => {
      state.matrix = action.payload;
    }
  }
});

export default counterSlice;