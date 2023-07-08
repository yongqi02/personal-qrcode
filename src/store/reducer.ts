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
    matrix: {},
    img: '',
    options: {
      render		: 'canvas',
      width		: 256,
      height		: 256,
      typeNumber	: -1,
      correctLevel	: 2,
      background      : '#ffffff',
      foreground      : '#000000',
    }
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
    updateMatrix: (state, action: PayloadAction<object>) => {
      state.matrix = action.payload;
    },
    updateImg: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
    },
    updateOptions: (state, action: PayloadAction<{
      render: string,
      width: number,
      height: number,
      typeNumber: number,
      correctLevel: number,
      background: string,
      foreground: string,
    }>) => {
      state.options = {
        ...state.options,
        ...action.payload
      };
    }
  }
});

export default counterSlice;