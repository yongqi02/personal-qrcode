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

// 可以订阅 store
// store.subscribe(() => console.log(store.getState()))
//
// // 将我们所创建的 action 对象传递给 `dispatch`
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}