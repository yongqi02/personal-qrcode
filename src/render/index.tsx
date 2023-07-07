/**
 * @author nizhou-studio
 * @create 2023/7/7 15:36
 * @path src/examples
 */


import {RENDER_TYPE} from '@/constant/TYPE.ts';
import Base from '@/render/Base.tsx';

const Render = (props: {
  type: RENDER_TYPE,
  matrix: any
}) => {

  function swit() {
    switch (props.type) {
      case RENDER_TYPE.Base:
        return <Base matrix={props.matrix} />
    }
  }

  return (
    <>
      {swit()}
    </>
  );
};

export default Render;