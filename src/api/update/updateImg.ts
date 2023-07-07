/**
 * @author nizhou-studio
 * @create 2023/7/7 23:52
 * @path src/api/update
 */
import {makeImg} from '@/api/make';
import store from '@/store/store.ts';
import {updateImg} from '@/store/action.ts';
import {RENDER_TYPE} from '@/constant/TYPE.ts';


export default function f() {
    store.dispatch(updateImg(makeImg(RENDER_TYPE.Base)));
}