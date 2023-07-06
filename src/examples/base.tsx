/**
 * @author nizhou-studio
 * @create 2023/7/5 17:55
 * @path src/utils/render
 */

function listPoint(qrcode: any) {
  if (!qrcode) return []

  const nCount = qrcode.getModuleCount();
  console.log(`nCount:${nCount}`)
  const pointList = new Array(nCount);
  let id = 0;
  for (let row = 0; row < nCount; row++) {
    for (let col = 0; col < nCount; col++) {
      if (qrcode.isDark(row, col))
        pointList.push(<use key={id++} fill="green" x={row} y={col} href="#simpleCircle"/>)
    }
  }
  console.log(pointList);
  return pointList;
}

function calViewBox(qrcode: any) {
  if (!qrcode) return '0 0 0 0';

  const nCount = qrcode.getModuleCount();
  return '0 0 ' + String(nCount) + ' ' + String(nCount);
}

const Base = (props: {qrcode: any}) => {
  return (
    <svg className="Qr-item-svg" width="100%" height="100%" viewBox={calViewBox(props.qrcode)} fill="white"
         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect fill="green" width={1} height={1} id="simpleRect"/>
      {/*<circle fill="green" r={0.5} id="simpleCircle"/>*/}
      {listPoint(props.qrcode)}
    </svg>
  )
}

export default Base
