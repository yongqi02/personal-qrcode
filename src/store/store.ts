/**
 * @author nizhou-studio
 * @create 2023/7/6 17:23
 * @path src/store
 */


import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/store/reducer.ts';


const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;