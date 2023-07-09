/**
 * @author heyq
 * @create 2023/7/9
 * @path src/controller/libs/types
 * @project personal-qrcode
 * @organization nizhou-studio
 */

interface Matrix {
  addData: (url: string | undefined) => void;
  make: () => void;
  getModuleCount: () => number;
  isDark: (row: number, col: number) => boolean;
}

export default Matrix;